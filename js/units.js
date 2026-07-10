(function () {
  'use strict';

  // ---------------------------------------------------------------
  // /js/units.js — drives the unit availability map on units.html.
  // Responsibilities (and only these):
  //   1. Render each unit cell's status from window.DELLA_UNITS.
  //   2. Compute available count + inject the number word into
  //      every [data-availability-count] element.
  //   3. Handle click/keyboard interaction to update the detail panel.
  //   4. Maintain selection styling.
  // ---------------------------------------------------------------

  var units = (window.DELLA_UNITS || []);
  if (!units.length) return;

  var NUMBER_WORDS = [
    'zero','one','two','three','four','five','six',
    'seven','eight','nine','ten','eleven','twelve'
  ];

  function numberWord(n) {
    if (n >= 0 && n < NUMBER_WORDS.length) return NUMBER_WORDS[n];
    return String(n);
  }

  function statusLabel(status) {
    if (status === 'available') return 'Available';
    if (status === 'reserved')  return 'Reserved';
    if (status === 'sold')      return 'Sold';
    return status;
  }

  function statusSentence(status) {
    if (status === 'available') return 'This unit is currently available. Contact us for details.';
    if (status === 'reserved')  return 'This unit has been reserved. Contact us to be notified if it returns to availability.';
    if (status === 'sold')      return 'This unit has been sold.';
    return '';
  }

  function locationLine(unit) {
    var b = 'Building ' + unit.building;
    var suffix = unit.storefront ? ' · Aviation Drive storefront frontage' : ' · Interior';
    return b + suffix;
  }

  // --- 1. Apply status to each SVG cell ---
  var byId = {};
  units.forEach(function (u) { byId[u.id] = u; });

  var cells = document.querySelectorAll('.unit-cell');
  cells.forEach(function (cell) {
    var id = parseInt(cell.getAttribute('data-unit-id'), 10);
    var unit = byId[id];
    if (!unit) return;
    cell.setAttribute('data-status', unit.status);
    var existing = cell.getAttribute('aria-label') || ('Unit ' + id);
    cell.setAttribute('aria-label', existing + ', ' + statusLabel(unit.status).toLowerCase());
  });

  // --- 2. Compute available count + inject everywhere ---
  var availableCount = units.filter(function (u) { return u.status === 'available'; }).length;
  var countTargets = document.querySelectorAll('[data-availability-count]');
  var availableWord = numberWord(availableCount);
  // The one page that loads this script (units.html) uses the count at
  // sentence-start ("Twelve units. Ten currently available."), so capitalise here.
  var availableWordCapped = availableWord.charAt(0).toUpperCase() + availableWord.slice(1);
  countTargets.forEach(function (el) { el.textContent = availableWordCapped; });

  // --- 3 + 4. Selection handling ---
  var detail = document.querySelector('[data-unit-detail-content]');

  function renderDetail(unit) {
    if (!detail) return;
    var pieces = [];
    pieces.push('<p class="unit-detail__unit">Unit ' + unit.id + '</p>');
    pieces.push('<p class="unit-detail__status" data-status="' + unit.status + '">' + statusLabel(unit.status).toUpperCase() + '</p>');
    pieces.push('<p class="unit-detail__location">' + locationLine(unit) + '</p>');
    pieces.push('<p class="unit-detail__sentence">' + statusSentence(unit.status) + '</p>');
    if (unit.status === 'available' || unit.status === 'reserved') {
      pieces.push('<a class="btn unit-detail__cta" href="/contact.html">Inquire about this unit</a>');
    }
    detail.innerHTML = pieces.join('');
  }

  function clearSelection() {
    cells.forEach(function (c) { c.classList.remove('is-selected'); });
  }

  function selectCell(cell) {
    var id = parseInt(cell.getAttribute('data-unit-id'), 10);
    var unit = byId[id];
    if (!unit) return;
    clearSelection();
    cell.classList.add('is-selected');
    renderDetail(unit);
  }

  cells.forEach(function (cell) {
    cell.addEventListener('click', function () { selectCell(cell); });
    cell.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault();
        selectCell(cell);
      }
    });
  });
})();
