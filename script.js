// ===== Contribution graph generation =====
const colors = ['sq-0', 'sq-1', 'sq-2', 'sq-3', 'sq-4'];
const graph = document.getElementById('graph');
const weeks = 52;
const days = 7;
const cells = [];

for (let i = 0; i < weeks * days; i++) {
  const cell = document.createElement('div');
  const level = Math.floor(Math.random() * 5);
  cell.classList.add(colors[level]);
  graph.appendChild(cell);
  cells.push(cell);
}

// ===== Scroll-reveal animations (fade + slide up) =====
const revealEls = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  revealEls.forEach(el => revealObserver.observe(el));

  // ===== Staggered pop-in for the contribution graph squares =====
  const contribBox = document.querySelector('.contrib-box');

  if (contribBox) {
    const graphObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          cells.forEach((cell, i) => {
            cell.style.animationDelay = `${Math.min(i * 1.4, 550)}ms`;
            cell.classList.add('sq-anim');
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    graphObserver.observe(contribBox);
  }
} else {
  // Fallback for browsers without IntersectionObserver support
  revealEls.forEach(el => el.classList.add('is-visible'));
  cells.forEach(cell => cell.classList.add('sq-anim'));
}
