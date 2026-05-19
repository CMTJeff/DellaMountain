(function () {
  'use strict';

  // Sticky header shadow on scroll
  var header = document.querySelector('.site-header');
  if (header) {
    var onScroll = function () {
      if (window.scrollY > 4) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu open/close
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('.mobile-menu');
  var closeBtn = document.querySelector('.mobile-menu__close');

  function openMenu() {
    if (!menu) return;
    menu.classList.add('is-open');
    menu.setAttribute('aria-hidden', 'false');
    if (toggle) toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-open');
  }

  function closeMenu() {
    if (!menu) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    if (toggle) toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-open');
  }

  if (toggle) toggle.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);

  // Close menu when a link inside it is tapped
  if (menu) {
    menu.addEventListener('click', function (e) {
      var t = e.target;
      if (t && t.tagName === 'A') closeMenu();
    });
  }

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu && menu.classList.contains('is-open')) {
      closeMenu();
    }
  });

  // Close if viewport grows past mobile breakpoint while open
  var mq = window.matchMedia('(min-width: 821px)');
  var onMQ = function () { if (mq.matches) closeMenu(); };
  if (mq.addEventListener) mq.addEventListener('change', onMQ);
  else if (mq.addListener) mq.addListener(onMQ);

  // Scroll reveal — subtle fade-up on entry. Honors reduced motion.
  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealTargets = document.querySelectorAll('[data-reveal]');

  if (prefersReduced || !('IntersectionObserver' in window)) {
    for (var i = 0; i < revealTargets.length; i++) {
      revealTargets[i].classList.add('is-revealed');
    }
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    revealTargets.forEach(function (el) { io.observe(el); });
  }
})();
