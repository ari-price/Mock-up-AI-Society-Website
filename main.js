function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  document.getElementById('nav-' + name).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav-links a, .btn').forEach(link => {
    link.addEventListener('click', e => {
      if (link.getAttribute('href') === '#') e.preventDefault();
    });
  });
});
