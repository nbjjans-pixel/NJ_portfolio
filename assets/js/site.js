// Small helpers shared by every page: mobile nav, scroll reveal, image lightbox, footer year.
(function () {
  // Mobile navigation
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Reveal on scroll
  var items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add('in'); });
  }

  // Lightbox for gallery images
  var box = document.createElement('div');
  box.className = 'lightbox';
  box.setAttribute('role', 'dialog');
  box.setAttribute('aria-label', 'Enlarged image');
  var big = document.createElement('img');
  box.appendChild(big);
  document.body.appendChild(box);
  document.querySelectorAll('[data-zoom]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var img = btn.querySelector('img');
      big.src = btn.getAttribute('data-zoom') || img.src;
      big.alt = img ? img.alt : '';
      box.classList.add('open');
    });
  });
  box.addEventListener('click', function () { box.classList.remove('open'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') box.classList.remove('open'); });

  // Language toggle: English is the original, Dutch is optional.
  var root = document.documentElement;
  function applyLang(l) {
    root.setAttribute('data-lang', l);
    root.lang = l;
    var title = root.getAttribute('data-title-' + l);
    if (title) document.title = title;
    try { localStorage.setItem('lang', l); } catch (e) {}
    document.querySelectorAll('.l-' + l + ' .reveal').forEach(function (el) { el.classList.add('in'); });
  }
  applyLang(root.getAttribute('data-lang') === 'nl' ? 'nl' : 'en');
  document.querySelectorAll('[data-lang-toggle]').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(root.getAttribute('data-lang') === 'nl' ? 'en' : 'nl'); });
  });

  // Dutch sections use "-nl" ids; follow #hash links to the visible language.
  function followHash() {
    if (root.getAttribute('data-lang') !== 'nl' || !location.hash) return;
    var el = document.getElementById(location.hash.slice(1) + '-nl');
    if (el) el.scrollIntoView();
  }
  window.addEventListener('hashchange', followHash);
  window.addEventListener('load', followHash);

  // Footer year
  document.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
