/* PragmaWorks — shared sidebar navigation */
(function () {
  var HTML = [
    '<div class="pw-sidebar" id="pw-sidebar">',
    '  <div class="pw-sidebar-brand"><a href="/">Pragma<span>Works</span></a></div>',
    '  <nav class="pw-sidebar-nav" aria-label="Site navigation">',

    '    <div class="pw-nav-section" data-section="try">',
    '      <button class="pw-nav-section-toggle" aria-expanded="false">',
    '        <span>Try It</span><i class="pw-chevron">&#8250;</i>',
    '      </button>',
    '      <div class="pw-nav-section-items">',
    '        <a href="/try" class="pw-nav-item">Developer Cookbook</a>',
    '        <a href="/audit" class="pw-nav-item">GS Audit Report</a>',
    '        <a href="/cookbook" class="pw-nav-item">Recipe Cards</a>',
    '      </div>',
    '    </div>',

    '    <div class="pw-nav-divider"></div>',

    '    <div class="pw-nav-section" data-section="reference">',
    '      <button class="pw-nav-section-toggle" aria-expanded="false">',
    '        <span>Reference</span><i class="pw-chevron">&#8250;</i>',
    '      </button>',
    '      <div class="pw-nav-section-items">',
    '        <a href="/forge" class="pw-nav-item">The Forge Cycle</a>',
    '        <a href="/diseases" class="pw-nav-item">7 Disease Cards</a>',
    '        <a href="/sentinel" class="pw-nav-item">Sentinel Tree</a>',
    '      </div>',
    '    </div>',

    '    <div class="pw-nav-divider"></div>',

    '    <div class="pw-nav-section" data-section="workshops">',
    '      <button class="pw-nav-section-toggle" aria-expanded="false">',
    '        <span>Workshops</span><i class="pw-chevron">&#8250;</i>',
    '      </button>',
    '      <div class="pw-nav-section-items">',
    '        <a href="https://forgeworkshop.dev" class="pw-nav-item" target="_blank" rel="noopener">The Forge &#8599;</a>',
    '        <a href="/teams" class="pw-nav-item">For Teams</a>',
    '        <a href="/leaders" class="pw-nav-item">For Leaders</a>',
    '      </div>',
    '    </div>',

    '    <div class="pw-nav-divider"></div>',

    '    <div class="pw-nav-section" data-section="research">',
    '      <button class="pw-nav-section-toggle" aria-expanded="false">',
    '        <span>Research</span><i class="pw-chevron">&#8250;</i>',
    '      </button>',
    '      <div class="pw-nav-section-items">',
    '        <a href="https://genspec.dev" class="pw-nav-item" target="_blank" rel="noopener">Generative Specification &#8599;</a>',
    '        <a href="https://github.com/jghiringhelli/generative-specification" class="pw-nav-item" target="_blank" rel="noopener">White Paper &amp; Data &#8599;</a>',
    '      </div>',
    '    </div>',

    '    <div class="pw-nav-divider"></div>',

    '    <div class="pw-nav-section" data-section="writing">',
    '      <button class="pw-nav-section-toggle" aria-expanded="false">',
    '        <span>Writing</span><i class="pw-chevron">&#8250;</i>',
    '      </button>',
    '      <div class="pw-nav-section-items">',
    '        <a href="/manifesto" class="pw-nav-item">Harness Manifesto</a>',
    '        <a href="https://ambientengineer.substack.com" class="pw-nav-item" target="_blank" rel="noopener">Substack &#8599;</a>',
    '      </div>',
    '    </div>',

    '    <div class="pw-nav-divider"></div>',

    '    <div class="pw-nav-section" data-section="tools">',
    '      <button class="pw-nav-section-toggle" aria-expanded="false">',
    '        <span>Tools</span><i class="pw-chevron">&#8250;</i>',
    '      </button>',
    '      <div class="pw-nav-section-items">',
    '        <a href="https://forgecraft.tools" class="pw-nav-item" target="_blank" rel="noopener">ForgeCraft &#8599;</a>',
    '        <a href="https://github.com/jghiringhelli/codeseeker" class="pw-nav-item" target="_blank" rel="noopener">CodeSeeker &#8599;</a>',
    '        <a href="https://github.com/jghiringhelli/chronicle" class="pw-nav-item" target="_blank" rel="noopener">Chronicle &#8599;</a>',
    '      </div>',
    '    </div>',

    '    <div class="pw-nav-divider"></div>',

    '    <a href="/diagnose" class="pw-nav-standalone" id="pw-diagnose-link">Diagnose</a>',

    '  </nav>',
    '  <div class="pw-sidebar-footer">',
    '    <a href="/">&#8592; Home</a>',
    '    <a href="mailto:juan@pragmaworks.dev">Contact</a>',
    '  </div>',
    '</div>',
    '<div class="pw-sidebar-overlay" id="pw-sidebar-overlay"></div>',
    '<button class="pw-sidebar-toggle" id="pw-sidebar-toggle" aria-label="Open navigation">&#9776;</button>'
  ].join('\n');

  // Path → section key
  var SECTIONS = {
    '/try': 'try', '/audit': 'try', '/cookbook': 'try', '/start': 'try',
    '/forge': 'reference', '/diseases': 'reference', '/sentinel': 'reference',
    '/teams': 'workshops', '/leaders': 'workshops',
    '/manifesto': 'writing',
    '/diagnose': 'tools', '/diagnostico': 'tools'
  };

  function init() {
    var wrap = document.createElement('div');
    wrap.innerHTML = HTML;
    while (wrap.firstChild) document.body.insertBefore(wrap.firstChild, document.body.firstChild);
    document.body.classList.add('pw-has-sidebar');

    var sidebar  = document.getElementById('pw-sidebar');
    var overlay  = document.getElementById('pw-sidebar-overlay');
    var toggle   = document.getElementById('pw-sidebar-toggle');
    var path     = window.location.pathname.replace(/\/$/, '') || '/';
    var sections = sidebar.querySelectorAll('.pw-nav-section');

    // Mark active link
    sidebar.querySelectorAll('.pw-nav-item, .pw-nav-standalone').forEach(function (a) {
      var href = a.getAttribute('href');
      if (href && href === path) a.classList.add('is-active');
    });

    // Auto-open section for current path
    var activeSection = SECTIONS[path] || 'try';
    sections.forEach(function (sec) {
      if (sec.getAttribute('data-section') === activeSection) {
        sec.classList.add('is-open');
        var btn = sec.querySelector('.pw-nav-section-toggle');
        if (btn) btn.setAttribute('aria-expanded', 'true');
      }
    });

    // Expand / collapse (accordion: one open at a time)
    sidebar.querySelectorAll('.pw-nav-section-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var sec = btn.closest('.pw-nav-section');
        var opening = !sec.classList.contains('is-open');
        sections.forEach(function (s) {
          s.classList.remove('is-open');
          var b = s.querySelector('.pw-nav-section-toggle');
          if (b) b.setAttribute('aria-expanded', 'false');
        });
        if (opening) {
          sec.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Mobile open / close
    function openSidebar()  { sidebar.classList.add('is-open');    overlay.classList.add('is-open');    toggle.setAttribute('aria-label', 'Close navigation'); }
    function closeSidebar() { sidebar.classList.remove('is-open'); overlay.classList.remove('is-open'); toggle.setAttribute('aria-label', 'Open navigation'); }
    if (toggle)  toggle.addEventListener('click', function () { sidebar.classList.contains('is-open') ? closeSidebar() : openSidebar(); });
    if (overlay) overlay.addEventListener('click', closeSidebar);
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeSidebar(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
