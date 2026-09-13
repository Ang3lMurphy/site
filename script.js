const colors = ['sq-0', 'sq-1', 'sq-2', 'sq-3', 'sq-4'];
const graph = document.getElementById('graph');
const weeks = 52;
const days = 7;

for (let i = 0; i < weeks * days; i++) {
  const cell = document.createElement('div');
  const level = Math.floor(Math.random() * 5);
  cell.classList.add(colors[level]);
  graph.appendChild(cell);
}
