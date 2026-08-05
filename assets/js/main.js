const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
const galleryButtons = document.querySelectorAll('.gallery-item');
const modal = document.querySelector('#galleryModal');
const modalImage = document.querySelector('#modalImage');
const modalCloseButtons = document.querySelectorAll('[data-close="true"]');

menuToggle?.addEventListener('click', () => {
  nav?.classList.toggle('nav-open');
});

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});

const scrollElements = document.querySelectorAll(
  '.hero-content, .section, .card, .gallery-item, .testimonials blockquote, .contact-info, .contact-form'
);

scrollElements.forEach((element) => element.classList.add('animate-on-scroll'));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  }
);

scrollElements.forEach((element) => observer.observe(element));

const hero = document.querySelector('.hero');
window.addEventListener('scroll', () => {
  if (!hero) return;
  const offset = Math.min(window.scrollY / 12, 40);
  hero.style.setProperty('--hero-offset', `${offset}px`);
});

galleryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const imageSrc = button.dataset.image;
    if (!imageSrc || !modal || !modalImage) return;
    modalImage.src = imageSrc;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });
});

modalCloseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
  });
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal?.classList.contains('open')) {
    modal?.classList.remove('open');
    modal?.setAttribute('aria-hidden', 'true');
  }
});