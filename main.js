// ── PAGE NAVIGATION ──
function showPage(name) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // Remove active from nav links
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Show selected page
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Re-trigger fade animations
  document.querySelectorAll('.fade-up').forEach(el => {
    el.style.animation = 'none';
    el.offsetHeight; // reflow
    el.style.animation = '';
  });
}

// ── DATA GRID VISUAL ──
function buildDataGrid() {
  const grid = document.getElementById('dataGrid');
  if (!grid) return;

  const colors = ['var(--accent)', 'var(--accent2)', '#5599ff', '#aa88ff'];
  const total = 64; // 8x8

  for (let i = 0; i < total; i++) {
    const cell = document.createElement('div');
    cell.className = 'data-cell';
    const dur = (2 + Math.random() * 4).toFixed(2) + 's';
    const delay = (Math.random() * 5).toFixed(2) + 's';
    const col = colors[Math.floor(Math.random() * colors.length)];
    cell.style.setProperty('--dur', dur);
    cell.style.setProperty('--delay', delay);
    cell.style.setProperty('--col', col);
    grid.appendChild(cell);
  }
}

// ── INIT ──
document.addEventListener('DOMContentLoaded', () => {
  buildDataGrid();

  // Handle nav link clicks without page jump
  document.querySelectorAll('.nav-links a, .btn').forEach(link => {
    link.addEventListener('click', e => {
      if (link.getAttribute('href') === '#') e.preventDefault();
    });
  });
});
