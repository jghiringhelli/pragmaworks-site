// i18n.js — Bilingual toggle for PragmaWorks site
// CSS-driven content switching via html[lang]; this script handles
// toggle UI + localStorage persistence + <title>/<meta> swap.
//
// Pattern:
//   - Inline pre-render script in each page <head> sets html[lang]
//     immediately based on localStorage/navigator.language (no flash).
//   - Bilingual content: <span lang="en">...</span><span lang="es">...</span>
//     CSS hides the inactive language via [lang="en"]/[lang="es"] selectors
//     scoped under html[lang].
//   - <title> and <meta> get data-en/data-es attributes; this script
//     reads them and swaps content text/attributes on language change.
//   - Toggle buttons: <div class="lang-toggle"><button data-lang="en">EN</button>...</div>
//     This script adds .active class to the current language button.

(function () {
  const STORAGE_KEY = 'pragmaworks-lang';
  const SUPPORTED = ['en', 'es'];

  function setLang(lang) {
    if (!SUPPORTED.includes(lang)) return;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* private mode */ }
    document.documentElement.lang = lang;

    // Swap <title> text content from data-en / data-es attribute
    const title = document.querySelector('title');
    if (title) {
      const v = title.getAttribute('data-' + lang);
      if (v) title.textContent = v;
    }

    // Swap meta tag content attributes from data-en / data-es
    document.querySelectorAll('meta[data-en], meta[data-es]').forEach(function (m) {
      const v = m.getAttribute('data-' + lang);
      if (v) m.setAttribute('content', v);
    });

    // Set .active state on all lang toggle buttons
    document.querySelectorAll('button[data-lang]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  function init() {
    // html[lang] is already set by the inline pre-render script
    const currentLang = document.documentElement.lang === 'es' ? 'es' : 'en';
    setLang(currentLang);

    // Add flag emoji to all lang buttons
    var FLAGS = { en: '🇺🇸', es: '🇲🇽' };
    document.querySelectorAll('button[data-lang]').forEach(function (btn) {
      var flag = FLAGS[btn.dataset.lang];
      if (flag) btn.textContent = flag + ' ' + btn.dataset.lang.toUpperCase();
    });

    // Wire up all lang buttons (both fixed toggle and any other instances)
    document.querySelectorAll('button[data-lang]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        setLang(this.dataset.lang);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
