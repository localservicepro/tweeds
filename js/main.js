/* Tweed Property Maintenance — shared site scripts */
(function () {
  'use strict';

  // Sticky / solid nav on scroll
  var nav = document.getElementById('nav');
  if (nav) {
    var solid = nav.classList.contains('solid');
    var onScroll = function () {
      if (!solid) nav.classList.toggle('scrolled', window.scrollY > 40);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Mobile menu toggle
  var toggle = document.querySelector('.navtoggle');
  var mask = document.querySelector('.navmask');
  var closeMenu = function () { document.body.classList.remove('menu-open'); };
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', document.body.classList.contains('menu-open'));
    });
  }
  if (mask) mask.addEventListener('click', closeMenu);
  document.querySelectorAll('.navlinks a').forEach(function (a) {
    a.addEventListener('click', closeMenu);
  });

  // Services dropdown: caret toggles the submenu (mobile tap + keyboard/click)
  var carets = document.querySelectorAll('.drop-caret');
  carets.forEach(function (btn) {
    var item = btn.closest('.has-drop');
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      var isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
      document.querySelectorAll('.has-drop.open').forEach(function (o) {
        if (o !== item) { o.classList.remove('open'); var b = o.querySelector('.drop-caret'); if (b) b.setAttribute('aria-expanded', 'false'); }
      });
    });
  });
  document.addEventListener('click', function (e) {
    document.querySelectorAll('.has-drop.open').forEach(function (o) {
      if (!o.contains(e.target)) {
        o.classList.remove('open');
        var b = o.querySelector('.drop-caret'); if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      document.querySelectorAll('.has-drop.open').forEach(function (o) {
        o.classList.remove('open');
        var b = o.querySelector('.drop-caret'); if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Reveal on scroll
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('visible'); });
  }

  // Count-up stats
  var counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    var cio = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var target = parseFloat(el.getAttribute('data-count'));
        var suffix = el.getAttribute('data-suffix') || '';
        var dur = 1400, start = null;
        var step = function (ts) {
          if (!start) start = ts;
          var p = Math.min((ts - start) / dur, 1);
          var val = Math.floor((0.5 - Math.cos(Math.PI * p) / 2) * target);
          el.textContent = val + suffix;
          if (p < 1) requestAnimationFrame(step);
          else el.textContent = target + suffix;
        };
        requestAnimationFrame(step);
        cio.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(function (el) { cio.observe(el); });
  }


  // Footer year
  var y = document.getElementById('yr');
  if (y) y.textContent = new Date().getFullYear();
})();
