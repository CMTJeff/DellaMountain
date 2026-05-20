(function () {
  'use strict';

  // ---------------------------------------------------------------
  // /js/gallery.js — minimal lightbox for gallery.html.
  // Responsibilities (and only these):
  //   1. Open/close lightbox on image click/tap.
  //   2. Esc closes.
  //   3. Arrow keys cycle within the current group.
  //   4. Trap focus inside the lightbox while open.
  //   5. aria-hidden + inert-ish behaviour while closed.
  // ---------------------------------------------------------------

  var lightbox = document.getElementById('lightbox');
  if (!lightbox) return;

  var imgEl     = lightbox.querySelector('.lightbox__image');
  var captionEl = lightbox.querySelector('.lightbox__caption');
  var closeBtn  = lightbox.querySelector('.lightbox__close');
  var prevBtn   = lightbox.querySelector('.lightbox__nav--prev');
  var nextBtn   = lightbox.querySelector('.lightbox__nav--next');

  var triggers = Array.prototype.slice.call(document.querySelectorAll('[data-lightbox]'));
  if (!triggers.length) return;

  // Group triggers by data-lightbox-group
  var groups = {};
  triggers.forEach(function (t) {
    var g = t.getAttribute('data-lightbox-group') || 'default';
    (groups[g] = groups[g] || []).push(t);
  });

  var currentGroup = null;
  var currentIndex = -1;
  var lastFocus    = null;

  function showAt(index) {
    if (!currentGroup) return;
    var items = groups[currentGroup];
    if (!items || !items.length) return;
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentIndex = index;
    var t = items[index];
    imgEl.src = t.getAttribute('data-lightbox-src') || '';
    imgEl.alt = t.querySelector('img') ? (t.querySelector('img').getAttribute('alt') || '') : '';
    captionEl.textContent = t.getAttribute('data-lightbox-caption') || '';
    var single = items.length <= 1;
    prevBtn.hidden = single;
    nextBtn.hidden = single;
  }

  function openFor(trigger) {
    currentGroup = trigger.getAttribute('data-lightbox-group') || 'default';
    var items = groups[currentGroup] || [];
    var idx = items.indexOf(trigger);
    if (idx < 0) idx = 0;
    lastFocus = document.activeElement;
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.classList.add('lightbox-open');
    showAt(idx);
    closeBtn.focus();
  }

  function close() {
    lightbox.classList.remove('is-open');
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    imgEl.src = '';
    captionEl.textContent = '';
    currentGroup = null;
    currentIndex = -1;
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  triggers.forEach(function (t) {
    t.addEventListener('click', function (e) {
      e.preventDefault();
      openFor(t);
    });
  });

  closeBtn.addEventListener('click', close);
  prevBtn.addEventListener('click', function () { showAt(currentIndex - 1); });
  nextBtn.addEventListener('click', function () { showAt(currentIndex + 1); });

  // Click on backdrop closes
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) close();
  });

  // Keyboard: Esc closes, arrows cycle, Tab is focus-trapped
  document.addEventListener('keydown', function (e) {
    if (!lightbox.classList.contains('is-open')) return;
    if (e.key === 'Escape') { close(); return; }
    if (e.key === 'ArrowLeft')  { showAt(currentIndex - 1); return; }
    if (e.key === 'ArrowRight') { showAt(currentIndex + 1); return; }
    if (e.key === 'Tab') {
      var focusables = [closeBtn, prevBtn, nextBtn].filter(function (b) { return b && !b.hidden; });
      if (!focusables.length) return;
      var first = focusables[0];
      var last  = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault(); last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault(); first.focus();
      }
    }
  });
})();
