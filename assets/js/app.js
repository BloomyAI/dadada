const onScroll = () => {
  const nav = document.querySelector('.site-nav');
  const backTop = document.querySelector('.back-top');
  const scrolled = window.scrollY > 24;
  nav.classList.toggle('scrolled', scrolled);
  backTop.classList.toggle('visible', window.scrollY > 480);
};

const initTabs = () => {
  const buttons = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.menu-panel');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      panels.forEach((panel) => panel.classList.remove('active'));
      button.classList.add('active');
      const target = document.getElementById(button.dataset.target);
      if (target) target.classList.add('active');
    });
  });
};

const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
};

const initReveal = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },
    { threshold: 0.15 }
  );
  document.querySelectorAll('.fade-in').forEach((item) => observer.observe(item));
};

const initBackTop = () => {
  const button = document.querySelector('.back-top');
  if (!button) return;
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
};

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initSmoothScroll();
  initReveal();
  initBackTop();
  onScroll();
  window.addEventListener('scroll', onScroll);
});
