/**
 * SBI PO Prelims Study Portal — script.js
 * Handles: dropdown menus, click-outside close, current-page highlight
 * Kept under 150 lines per spec.
 */

(function () {
  'use strict';

  /* ── Dropdown Logic ── */

  const dropdowns = document.querySelectorAll('.dropdown');

  function closeAll(except) {
    dropdowns.forEach(function (dd) {
      if (dd === except) return;
      var btn  = dd.querySelector('.dd-btn');
      var menu = dd.querySelector('.dd-menu');
      if (btn)  btn.setAttribute('aria-expanded', 'false');
      if (menu) menu.classList.remove('is-open');
    });
  }

  function toggleDropdown(dd) {
    var btn    = dd.querySelector('.dd-btn');
    var menu   = dd.querySelector('.dd-menu');
    var isOpen = menu.classList.contains('is-open');

    closeAll(dd);

    if (isOpen) {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    } else {
      menu.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      /* Focus first link */
      var firstLink = menu.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  }

  dropdowns.forEach(function (dd) {
    var btn  = dd.querySelector('.dd-btn');
    var menu = dd.querySelector('.dd-menu');

    /* Toggle on button click */
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      toggleDropdown(dd);
    });

    /* Close when a menu link is clicked */
    if (menu) {
      menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
          closeAll(null);
        });
      });
    }

    /* Keyboard: Escape closes */
    dd.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeAll(null);
        btn.focus();
      }
    });
  });

  /* Close all dropdowns when clicking outside */
  document.addEventListener('click', function () {
    closeAll(null);
  });

  /* ── Current Page Highlight ── */

  var path = window.location.pathname.split('/').pop() || 'index.html';

  document.querySelectorAll('.dd-menu a, .site-nav > a.nav-link').forEach(function (link) {
    var href = link.getAttribute('href').split('/').pop();
    if (href === path) {
      link.classList.add('current-page');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ── Collapsible Sections (JS fallback for <details>) ── */
  /* Modern browsers handle <details> natively.
     This adds keyboard support and smooth toggling if needed. */

  document.querySelectorAll('details').forEach(function (det) {
    det.querySelector('summary').addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        det.open = !det.open;
      }
    });
  });

})();
