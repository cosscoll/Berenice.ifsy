/** Gestion de la liste de tâches — stockage local, export en fichier texte. */
const TODO_STORAGE_KEY = 'ifsi_todo_v1';

function loadTodos() {
  try { return JSON.parse(localStorage.getItem(TODO_STORAGE_KEY) || '[]'); } catch { return []; }
}
function saveTodos(todos) {
  try { localStorage.setItem(TODO_STORAGE_KEY, JSON.stringify(todos)); } catch {}
}
function addTodo(text) {
  const todos = loadTodos();
  const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
  todos.push({ id, text, done: false });
  saveTodos(todos);
  return todos;
}
function toggleTodo(id) {
  const todos = loadTodos().map((t) => (t.id === id ? { ...t, done: !t.done } : t));
  saveTodos(todos);
  return todos;
}
function deleteTodo(id) {
  const todos = loadTodos().filter((t) => t.id !== id);
  saveTodos(todos);
  return todos;
}
function clearDoneTodos() {
  const todos = loadTodos().filter((t) => !t.done);
  saveTodos(todos);
  return todos;
}

/** Génère un fichier .txt téléchargeable de la liste (case à cocher façon texte). */
function downloadTodosAsText(todos, studentName) {
  const date = new Date().toLocaleDateString('fr-FR');
  const lines = [
    `Liste de tâches — ${studentName}`,
    `Générée le ${date}`,
    '',
    ...todos.map((t) => `[${t.done ? 'x' : ' '}] ${t.text}`),
  ];
  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `taches-${studentName.toLowerCase()}-${date.replace(/\//g, '-')}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
