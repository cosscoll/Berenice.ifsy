/**
 * Moteur de carte mentale — SVG généré à la main, ZÉRO dépendance externe.
 * v2 : disposition radiale (les branches partent dans toutes les directions,
 * pas seulement de gauche à droite), connecteurs ancrés sur le bord réel des
 * boîtes (pas une estimation approximative), zoom/pan à la souris et au
 * toucher, export SVG téléchargeable, ouverture en plein écran.
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
  return root.children.length === 1 ? root.children[0] : { text: '(sans titre)', level: 0, children: root.children };
}

function countLeaves(node) {
  if (node.children.length === 0) return 1;
  return node.children.reduce((sum, c) => sum + countLeaves(c), 0);
}

function maxDepth(node) {
  if (node.children.length === 0) return 0;
  return 1 + Math.max(...node.children.map(maxDepth));
}

/** Découpe un texte long en plusieurs lignes (estimation par nombre de caractères). */
function wrapText(text, maxCharsPerLine) {
  const words = text.split(' ');
  const lines = [];
  let current = '';
  for (const word of words) {
    const candidate = current ? current + ' ' + word : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  return lines.slice(0, 3); // 3 lignes max, au-delà on tronque
}

function estimateTextWidth(text, fontSize) {
  return text.length * fontSize * 0.56;
}

const RING_GAP = 190;
const LEVEL_COLORS = ['#2E5C52', '#5A8FA8', '#8C8272', '#B1502F'];
const FONT_SIZE = [14, 13, 12.5, 12];
const MAX_CHARS = [16, 15, 14, 13];
const LINE_HEIGHT = 16;
const NODE_PAD_X = 12;
const NODE_PAD_Y = 8;

/** Répartit récursivement chaque nœud dans une plage angulaire (radians). */
function layoutRadial(node, angleStart, angleEnd, depth, positions, parent) {
  const angle = (angleStart + angleEnd) / 2;
  const radius = depth === 0 ? 0 : depth * RING_GAP;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  const level = Math.min(depth, MAX_CHARS.length - 1);
  const lines = depth === 0 ? [node.text] : wrapText(node.text, MAX_CHARS[level]);
  const boxWidth = Math.max(...lines.map((l) => estimateTextWidth(l, FONT_SIZE[level]))) + NODE_PAD_X * 2;
  const boxHeight = lines.length * LINE_HEIGHT + NODE_PAD_Y * 2;

  const pos = { node, x, y, depth, angle, lines, boxWidth, boxHeight, parent };
  positions.push(pos);

  const n = node.children.length;
  if (n === 0) return;
  const totalWeight = node.children.reduce((s, c) => s + countLeaves(c), 0) || 1;
  let cursor = angleStart;
  const fullCircle = (angleEnd - angleStart) >= 2 * Math.PI - 0.001;
  node.children.forEach((child) => {
    const weight = countLeaves(child);
    const slice = (angleEnd - angleStart) * (weight / totalWeight);
    layoutRadial(child, cursor, cursor + slice, depth + 1, positions, pos);
    cursor += slice;
  });
}

/** Point où un segment partant du centre (cx,cy) vers (dx,dy) sort d'un rectangle. */
function rectEdgePoint(cx, cy, halfW, halfH, dx, dy) {
  if (dx === 0 && dy === 0) return { x: cx, y: cy };
  const scaleX = dx !== 0 ? halfW / Math.abs(dx) : Infinity;
  const scaleY = dy !== 0 ? halfH / Math.abs(dy) : Infinity;
  const t = Math.min(scaleX, scaleY);
  return { x: cx + dx * t, y: cy + dy * t };
}

function escapeXml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

/** Construit le SVG (chaîne) pour un Markdown en outline. */
function buildMindmapSvg(markdown) {
  const tree = parseOutline(markdown);
  const positions = [];
  layoutRadial(tree, 0, 2 * Math.PI, 0, positions, null);

  const depth = Math.max(1, maxDepth(tree));
  const halfExtent = depth * RING_GAP + 140;
  const width = halfExtent * 2;
  const height = halfExtent * 2;

  const links = positions
    .filter((p) => p.parent)
    .map((p) => {
      const dx = p.x - p.parent.x;
      const dy = p.y - p.parent.y;
      const start = rectEdgePoint(p.parent.x, p.parent.y, p.parent.boxWidth / 2, p.parent.boxHeight / 2, dx, dy);
      const end = rectEdgePoint(p.x, p.y, p.boxWidth / 2, p.boxHeight / 2, -dx, -dy);
      const midX = (start.x + end.x) / 2;
      const midY = (start.y + end.y) / 2;
      return `<path d="M ${start.x.toFixed(1)} ${start.y.toFixed(1)} Q ${midX.toFixed(1)} ${midY.toFixed(1)}, ${end.x.toFixed(1)} ${end.y.toFixed(1)}" fill="none" stroke="#C7BFAE" stroke-width="1.6" />`;
    })
    .join('');

  const nodes = positions
    .map((p) => {
      const level = Math.min(p.depth, LEVEL_COLORS.length - 1);
      const color = LEVEL_COLORS[level];
      const isRoot = p.depth === 0;
      const fill = isRoot ? color : '#fff';
      const textColor = isRoot ? '#fff' : '#1E2A24';
      const textLines = p.lines
        .map((line, i) => {
          const dy = (i - (p.lines.length - 1) / 2) * LINE_HEIGHT;
          return `<tspan x="${p.x}" y="${(p.y + dy + 4).toFixed(1)}">${escapeXml(line)}</tspan>`;
        })
        .join('');
      return `
        <g>
          <rect x="${(p.x - p.boxWidth / 2).toFixed(1)}" y="${(p.y - p.boxHeight / 2).toFixed(1)}"
                width="${p.boxWidth.toFixed(1)}" height="${p.boxHeight.toFixed(1)}" rx="9"
                fill="${fill}" stroke="${color}" stroke-width="1.5" />
          <text text-anchor="middle" font-size="${FONT_SIZE[level]}" font-family="'Public Sans', sans-serif"
                fill="${textColor}" font-weight="${isRoot ? 700 : 500}">${textLines}</text>
        </g>`;
    })
    .join('');

  return { width, height, halfExtent, content: links + nodes };
}

/**
 * Rend une carte mentale interactive dans `container` (un <div> vide) :
 * SVG avec zoom (molette) et déplacement (glisser), plus une mini barre
 * d'outils (zoom +/-, réinitialiser, agrandir en plein écran, télécharger).
 */
function renderMindmapInto(container, markdown, options) {
  const opts = Object.assign({ height: 320, title: 'carte-mentale' }, options || {});
  const { width, height, halfExtent, content } = buildMindmapSvg(markdown);

  container.innerHTML = `
    <div class="mm-wrap" style="position:relative; border:1px solid var(--line); border-radius:12px; overflow:hidden; background:var(--mist);">
      <svg class="mm-svg" viewBox="${-halfExtent} ${-halfExtent} ${width} ${height}" style="width:100%; height:${opts.height}px; display:block; cursor:grab;">
        <g class="mm-viewport">${content}</g>
      </svg>
      <div class="mm-toolbar" style="position:absolute; top:8px; right:8px; display:flex; gap:4px;">
        <button type="button" class="mm-btn" data-action="zoom-in" title="Zoomer">+</button>
        <button type="button" class="mm-btn" data-action="zoom-out" title="Dézoomer">−</button>
        <button type="button" class="mm-btn" data-action="reset" title="Réinitialiser la vue">⤾</button>
        <button type="button" class="mm-btn" data-action="fullscreen" title="Agrandir">⤢</button>
        <button type="button" class="mm-btn" data-action="download" title="Télécharger en SVG">⬇</button>
      </div>
    </div>
  `;

  const svgEl = container.querySelector('.mm-svg');
  const viewportG = container.querySelector('.mm-viewport');
  const state = attachPanZoom(svgEl, viewportG);

  container.querySelectorAll('.mm-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      if (action === 'zoom-in') state.zoomBy(1.25);
      if (action === 'zoom-out') state.zoomBy(0.8);
      if (action === 'reset') state.reset();
      if (action === 'fullscreen') openFullscreen(markdown, opts.title);
      if (action === 'download') downloadSvg(svgEl, opts.title);
    });
  });

  return state;
}

/** Ajoute le zoom (molette) et le déplacement (glisser/toucher) à un SVG. */
function attachPanZoom(svgEl, viewportG) {
  let scale = 1, tx = 0, ty = 0;
  let dragging = false, lastX = 0, lastY = 0;

  function apply() {
    viewportG.setAttribute('transform', `translate(${tx} ${ty}) scale(${scale})`);
  }

  function reset() { scale = 1; tx = 0; ty = 0; apply(); }
  function zoomBy(factor) { scale = Math.min(4, Math.max(0.3, scale * factor)); apply(); }

  svgEl.addEventListener('wheel', (e) => {
    e.preventDefault();
    zoomBy(e.deltaY < 0 ? 1.1 : 0.9);
  }, { passive: false });

  svgEl.addEventListener('mousedown', (e) => { dragging = true; lastX = e.clientX; lastY = e.clientY; svgEl.style.cursor = 'grabbing'; });
  window.addEventListener('mousemove', (e) => {
    if (!dragging) return;
    tx += e.clientX - lastX; ty += e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    apply();
  });
  window.addEventListener('mouseup', () => { dragging = false; svgEl.style.cursor = 'grab'; });

  // Support tactile basique (un doigt = déplacer).
  svgEl.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) { dragging = true; lastX = e.touches[0].clientX; lastY = e.touches[0].clientY; }
  }, { passive: true });
  svgEl.addEventListener('touchmove', (e) => {
    if (!dragging || e.touches.length !== 1) return;
    tx += e.touches[0].clientX - lastX; ty += e.touches[0].clientY - lastY;
    lastX = e.touches[0].clientX; lastY = e.touches[0].clientY;
    apply();
  }, { passive: true });
  svgEl.addEventListener('touchend', () => { dragging = false; });

  return { reset, zoomBy };
}

/** Ouvre la carte mentale en grand, dans un panneau qui recouvre l'écran. */
function openFullscreen(markdown, title) {
  const overlay = document.createElement('div');
  overlay.style.cssText = 'position:fixed; inset:0; background:rgba(20,24,22,0.92); z-index:10000; display:flex; flex-direction:column; padding:20px;';
  overlay.innerHTML = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
      <strong style="color:#fff; font-family:'Fraunces',serif; font-size:18px;">${title}</strong>
      <button type="button" id="mm-close" style="background:#fff; border:none; border-radius:999px; padding:8px 16px; cursor:pointer; font-weight:600;">Fermer ✕</button>
    </div>
    <div id="mm-fullscreen-container" style="flex:1; min-height:0;"></div>
  `;
  document.body.appendChild(overlay);
  document.body.style.overflow = 'hidden';

  const holder = overlay.querySelector('#mm-fullscreen-container');
  renderMindmapInto(holder, markdown, { height: window.innerHeight - 100, title });
  holder.querySelector('.mm-wrap').style.height = '100%';
  holder.querySelector('.mm-svg').style.height = '100%';

  function close() {
    document.body.removeChild(overlay);
    document.body.style.overflow = '';
  }
  overlay.querySelector('#mm-close').addEventListener('click', close);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
}

/** Sérialise le SVG et déclenche un téléchargement (.svg autonome, ouvrable dans tout navigateur). */
function downloadSvg(svgEl, title) {
  const clone = svgEl.cloneNode(true);
  clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
  clone.style.background = '#F3F6F4';
  const source = new XMLSerializer().serializeToString(clone);
  const blob = new Blob([source], { type: 'image/svg+xml' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = (title || 'carte-mentale').toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.svg';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

if (typeof module !== 'undefined') {
  module.exports = { parseOutline, countLeaves, maxDepth, wrapText, buildMindmapSvg };
}
