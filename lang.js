/* ============================================================
   BAGAS ADITYA — Language Toggle
   lang.js
   ID (Indonesia) ↔ EN (English)
   ============================================================ */

let currentLang = localStorage.getItem('lang') || 'id';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // Update html lang attribute
  document.documentElement.lang = lang === 'id' ? 'id' : 'en';

  // Update body class
  document.body.classList.remove('lang-id', 'lang-en');
  document.body.classList.add('lang-' + lang);

  // Update mobile label
  const mobileLabel = document.getElementById('langMobileLabel');
  if (mobileLabel) mobileLabel.textContent = lang === 'id' ? 'EN' : 'ID';

  // Translate all elements with data-id / data-en
  document.querySelectorAll('[data-id][data-en]').forEach(el => {
    const text = lang === 'id' ? el.dataset.id : el.dataset.en;
    // Use innerHTML to support <strong> tags inside paragraphs
    if (el.innerHTML !== text) el.innerHTML = text;
  });

  // Translate placeholders
  document.querySelectorAll('[data-placeholder-id][data-placeholder-en]').forEach(el => {
    el.placeholder = lang === 'id' ? el.dataset.placeholderId : el.dataset.placeholderEn;
  });

  // Update services modal lang (if open)
  const svcBody = document.getElementById('svcModalBody');
  if (svcBody && svcBody.dataset.currentKey) {
    openService(svcBody.dataset.currentKey);
  }

  // Update page title
  document.title = lang === 'id'
    ? 'Bagas Aditya — Portfolio'
    : 'Bagas Aditya — Portfolio';
}

window.toggleLang = function () {
  applyLang(currentLang === 'id' ? 'en' : 'id');
};

// Apply on load
document.addEventListener('DOMContentLoaded', function () {
  applyLang(currentLang);
});
