document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (path === '/' && href === '/') || (path !== '/' && href !== '/' && path.startsWith(href))) {
      link.classList.add('active');
    }
  });
});
