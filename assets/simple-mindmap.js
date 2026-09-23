/**
 * Moteur de carte mentale — SVG généré à la main, AUCUNE dépendance externe
 * (ni markmap, ni d3, ni CDN). Après deux échecs avec markmap-lib/markmap-view
 * (impossibles à tester dans cet environnement sans navigateur), ce moteur
 * est entièrement autonome et vérifiable avec du code seul, sans navigateur.
 *
 * Parse un Markdown à base de # ## ### en arbre, puis dessine un diagramme
 * arborescent horizontal (racine à gauche, branches vers la droite).
 */

function parseOutline(markdown) {
  const lines = markdown.split('\n').map((l) => l.trimEnd()).filter((l) => l.trim() !== '');
  const root = { text: '', level: 0, children: [] };
  const stack = [root];
  for (const line of lines) {
    const match = line.match(/^(#{1,4})\s+(.*)$/);
    if (!match) continue;
    const level = match[1].length;
    const text = match[2].trim();
    const node = { text, level, children: [] };
    while (stack.length > 1 && stack[stack.length - 1].level >= level) stack.pop();
    stack[stack.length - 1].children.push(node);
    stack.push(node);
  }
  // Si plusieurs titres de niveau 1, on les regroupe sous une racine invisible.
  return root.children.length === 1 ? root.children[0] : { text: '', level: 0, children: root.children };
}

function countLeaves(node) {
  if (node.children.length === 0) return 1;
  return node.children.reduce((sum, c) => sum + countLeaves(c), 0);
}

const LEVEL_COLORS = ['#2E5C52', '#5A8FA8', '#8C8272', '#B1502F'];
const ROW_HEIGHT = 34;
const COL_WIDTH = 190;
const NODE_PAD_X = 12;
const NODE_HEIGHT = 26;

function layout(node, depth, yTop, yBottom, positions, parentPos) {
  const y = (yTop + yBottom) / 2;
  const x = 20 + depth * COL_WIDTH;
  const pos = { node, x, y, depth };
  positions.push(pos);
  if (parentPos) pos.parent = parentPos;

  const n = node.children.length;
  if (n === 0) return;
  let cursor = yTop;
  node.children.forEach((child) => {
    const weight = countLeaves(child);
    const band = (yBottom - yTop) * (weight / countLeaves(node));
    layout(child, depth + 1, cursor, cursor + band, positions, pos);
    cursor += band;
  });
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Estime une largeur de texte grossière (évite de dépendre du DOM pour mesurer). */
function estimateTextWidth(text, fontSize) {
  return text.length * fontSize * 0.58;
}

/**
 * Génère le SVG (chaîne de caractères) pour un Markdown en outline.
 * Retourne { svg, width, height } — l'appelant fixe le viewBox.
 */
function buildMindmapSvg(markdown) {
  const tree = parseOutline(markdown);
  const totalLeaves = Math.max(1, countLeaves(tree));
  const height = Math.max(200, totalLeaves * ROW_HEIGHT + 20);
  const maxDepth = (() => {
    let max = 0;
    (function walk(n, d) { max = Math.max(max, d); n.children.forEach((c) => walk(c, d + 1)); })(tree, 0);
    return max;
  })();
  const width = 40 + (maxDepth + 1) * COL_WIDTH;

  const positions = [];
  layout(tree, 0, 10, height - 10, positions, null);

  const links = positions
    .filter((p) => p.parent)
    .map((p) => {
      const p1x = p.parent.x + estimateTextWidth(p.parent.node.text, 13) / 2 + NODE_PAD_X + 4;
      const p2x = p.x - estimateTextWidth(p.node.text, 13) / 2 - NODE_PAD_X - 4;
      const midX = (p1x + p2x) / 2;
      return `<path d="M ${p1x} ${p.parent.y} C ${midX} ${p.parent.y}, ${midX} ${p.y}, ${p2x} ${p.y}" fill="none" stroke="#D9D2C2" stroke-width="1.5" />`;
    })
    .join('');

  const nodes = positions
    .map((p) => {
      const color = LEVEL_COLORS[Math.min(p.depth, LEVEL_COLORS.length - 1)];
      const textWidth = estimateTextWidth(p.node.text, 13);
      const boxWidth = textWidth + NODE_PAD_X * 2;
      const isRoot = p.depth === 0;
      const fill = isRoot ? color : '#fff';
      const textColor = isRoot ? '#fff' : '#1E2A24';
      return `
        <g>
          <rect x="${p.x - boxWidth / 2}" y="${p.y - NODE_HEIGHT / 2}" width="${boxWidth}" height="${NODE_HEIGHT}" rx="8"
                fill="${fill}" stroke="${color}" stroke-width="1.4" />
          <text x="${p.x}" y="${p.y + 4}" text-anchor="middle" font-size="13" font-family="'Public Sans', sans-serif"
                fill="${textColor}" font-weight="${isRoot ? 600 : 500}">${escapeXml(p.node.text)}</text>
        </g>`;
    })
    .join('');

  return { width, height, svg: links + nodes };
}

/** Rend la carte mentale dans un élément <svg> déjà présent dans le DOM. */
function renderMindmap(svgEl, markdown) {
  const { width, height, svg } = buildMindmapSvg(markdown);
  svgEl.setAttribute('viewBox', `0 0 ${width} ${height}`);
  svgEl.innerHTML = svg;
}

// Exposé pour test en Node (ignoré dans le navigateur, `module` n'existe pas).
if (typeof module !== 'undefined') {
  module.exports = { parseOutline, countLeaves, buildMindmapSvg };
}
