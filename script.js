/* ============================================================
   BAGAS ADITYA — Portfolio v2
   script.js
   ============================================================ */

/* ── LOADER ─────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
  const loader = document.getElementById('loader');
  const pctEl  = document.getElementById('loader-pct');
  let n = 0;
  const iv = setInterval(() => {
    n += Math.random() * 14;
    if (n >= 100) { n = 100; clearInterval(iv); }
    if (pctEl) pctEl.textContent = Math.floor(n) + '%';
  }, 80);
  setTimeout(() => {
    if (loader) loader.classList.add('out');
    const ht = document.getElementById('heroText');
    const hv = document.getElementById('heroVisual');
    if (ht) ht.classList.add('in');
    if (hv) hv.classList.add('in');
    startTypewriter();
    initReveal();
  }, 2300);
});

/* ── TYPEWRITER ──────────────────────────────────────────────── */
function startTypewriter() {
  const el = document.getElementById('typeGreet');
  if (!el) return;
  const phrases = ['Halo, Saya', "Hi, I'm", 'Konnichiwa!', 'Selamat datang!'];
  let pi = 0, ci = 0, deleting = false;
  function tick() {
    const word = phrases[pi];
    if (!deleting) {
      el.textContent = word.slice(0, ++ci);
      if (ci === word.length) { deleting = true; setTimeout(tick, 1200); return; }
    } else {
      el.textContent = word.slice(0, --ci);
      if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
    }
    setTimeout(tick, deleting ? 60 : 110);
  }
  tick();
}

/* ── STARFIELD ───────────────────────────────────────────────── */
(function () {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
  resize();
  addEventListener('resize', resize);
  const stars = Array.from({ length: 170 }, () => ({
    x: Math.random() * innerWidth, y: Math.random() * innerHeight,
    r: Math.random() * 1.4 + 0.2,
    o: Math.random(), s: (Math.random() - 0.5) * 0.15,
    vx: (Math.random() - 0.5) * 0.08,
    vy: (Math.random() - 0.5) * 0.08,
  }));
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      s.o += s.s;
      if (s.o <= 0 || s.o >= 1) s.s *= -1;
      s.x += s.vx; s.y += s.vy;
      if (s.x < 0) s.x = canvas.width;  if (s.x > canvas.width)  s.x = 0;
      if (s.y < 0) s.y = canvas.height; if (s.y > canvas.height) s.y = 0;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,245,255,${s.o * 0.55})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

/* ── PARTICLES ───────────────────────────────────────────────── */
(function () {
  const colors = ['#00f5ff','#ff00e5','#ffd700','#00ff88','#a855f7','#ff6b35'];
  const MAX_PARTICLES = 25;
  let count = 0;
  function spawn() {
    if (count >= MAX_PARTICLES) return;
    count++;
    const p = document.createElement('div');
    p.className = 'particle';
    const sz = Math.random() * 5 + 2;
    const dur = 6 + Math.random() * 8;
    p.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}vw;background:${colors[Math.floor(Math.random()*colors.length)]};animation-duration:${dur}s;animation-delay:${Math.random()*3}s;`;
    document.body.appendChild(p);
    setTimeout(() => { p.remove(); count--; }, (dur + 3) * 1000);
  }
  setInterval(spawn, 1200);
})();

/* ── CUSTOM CURSOR ───────────────────────────────────────────── */
(function () {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function lerp(a, b, t) { return a + (b - a) * t; }
  function loop() {
    dot.style.left = mx + 'px'; dot.style.top = my + 'px';
    rx = lerp(rx, mx, 0.12); ry = lerp(ry, my, 0.12);
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  }
  loop();
  const hoverEls = document.querySelectorAll('a, button, .skill-card, .cert-card, .proj-card, .svc-card, .flt-btn, .contact-item, .bnav-item, .drawer-item, .soft-item, .badge');
  hoverEls.forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.transform = 'translate(-50%,-50%) scale(2)';
      ring.style.width = '56px'; ring.style.height = '56px';
      ring.style.borderColor = 'var(--cyan)';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.transform = 'translate(-50%,-50%) scale(1)';
      ring.style.width = '36px'; ring.style.height = '36px';
      ring.style.borderColor = 'var(--magenta)';
    });
  });
})();

/* ── NAVBAR SCROLL ───────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  updateActiveNav();
  bttToggle();
});

/* ── ACTIVE NAV HIGHLIGHT ────────────────────────────────────── */
function updateActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const scrollY = window.scrollY + 120;
  sections.forEach(sec => {
    const top = sec.offsetTop, bottom = top + sec.offsetHeight;
    const id  = sec.getAttribute('id');
    const dl  = document.querySelector(`.nav-links a[href="#${id}"]`);
    const bi  = document.querySelector(`.bnav-item[data-target="${id}"]`);
    const di  = document.querySelector(`.drawer-item[data-target="${id}"]`);
    const inView = scrollY >= top && scrollY < bottom;
    if (dl) dl.classList.toggle('active', inView);
    if (bi) bi.classList.toggle('active', inView);
    if (di) di.classList.toggle('active', inView);
  });
}

/* ── SMOOTH SCROLL ───────────────────────────────────────────── */
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"], [data-target]');
  if (!a) return;
  const href   = a.getAttribute('href') || '#' + a.dataset.target;
  const target = document.querySelector(href);
  if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); closeDrawer(); }
});

/* ── REVEAL ON SCROLL ────────────────────────────────────────── */
function initReveal() {
  const targets = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        // Skill bar animation
        e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
          bar.style.width = bar.dataset.pct + '%';
        });
        // Stats counter
        e.target.querySelectorAll('.counter').forEach(el => animateCounter(el));
      }
    });
  }, { threshold: 0.1 });
  targets.forEach(t => io.observe(t));

  // Also observe skill cards individually for bar animation
  document.querySelectorAll('.skill-card').forEach(card => {
    const io2 = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.querySelectorAll('.skill-bar-fill').forEach(bar => {
            setTimeout(() => { bar.style.width = bar.dataset.pct + '%'; }, 200);
          });
          io2.unobserve(e.target);
        }
      });
    }, { threshold: 0.3 });
    io2.observe(card);
  });
}

/* ── STATS COUNTER ANIMATION ─────────────────────────────────── */
function animateCounter(el) {
  if (el.dataset.animated) return;
  el.dataset.animated = '1';
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  let current  = 0;
  const step   = Math.ceil(target / 40);
  const timer  = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = current + suffix;
  }, 40);
}

/* ── BACK TO TOP ─────────────────────────────────────────────── */
const bttBtn = document.getElementById('btt');
function bttToggle() {
  if (bttBtn) bttBtn.classList.toggle('show', window.scrollY > 300);
}

/* ── CERTIFICATE FILTER ──────────────────────────────────────── */
document.querySelectorAll('.flt-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.flt-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.cert-card').forEach(card => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.cat !== filter);
    });
  });
});

/* ── CERTIFICATE MODAL ───────────────────────────────────────── */
const certModal    = document.getElementById('certModal');
const modalImg     = document.getElementById('modalImg');
const modalTitle   = document.getElementById('modalTitle');
const modalIssuer  = document.getElementById('modalIssuer');
const modalDate    = document.getElementById('modalDate');
const modalVerify  = document.getElementById('modalVerify');
const modalDl      = document.getElementById('modalDl');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose   = document.getElementById('modalClose');

function openModal(card) {
  const img    = card.querySelector('.cert-img-wrap img');
  const title  = card.querySelector('.cert-body h3').textContent;
  const issuer = card.querySelector('.cert-meta span:nth-child(1)').textContent.trim();
  const date   = card.querySelector('.cert-meta span:nth-child(2)').textContent.trim();
  const verify = card.querySelector('.cert-verify');
  const dl     = card.querySelector('.cert-dl');
  if (img) { modalImg.src = img.src; modalImg.style.display = 'block'; }
  else { modalImg.style.display = 'none'; }
  modalTitle.textContent  = title;
  modalIssuer.textContent = issuer;
  modalDate.textContent   = date;
  if (verify) { modalVerify.href = verify.href; modalVerify.style.display = 'inline-flex'; }
  else { modalVerify.style.display = 'none'; }
  if (dl) { modalDl.href = dl.href; }
  certModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  certModal.classList.remove('active');
  document.body.style.overflow = '';
}
document.querySelectorAll('.cert-card').forEach(card => {
  card.addEventListener('click', e => {
    if (e.target.closest('.cert-actions') || e.target.closest('.cert-overlay a')) return;
    openModal(card);
  });
});
document.querySelectorAll('.cert-view-btn').forEach(btn => {
  btn.addEventListener('click', e => { e.stopPropagation(); openModal(btn.closest('.cert-card')); });
});
if (modalClose)   modalClose.addEventListener('click', closeModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closeModal(); closeService(); } });

/* ── SERVICES MODAL ──────────────────────────────────────────── */
const serviceData = {
  webdev: {
    title: 'Front-End Development',
    icon: 'fa-code',
    color: 'linear-gradient(135deg,var(--cyan),#0066ff)',
    desc: 'Saya membangun website yang modern, responsif, dan interaktif dengan fokus pada user experience yang nyaman dan tampilan yang menarik.',
    points: [
      'Landing page & portfolio website',
      'Web app responsif (mobile-friendly)',
      'UI/UX implementation dari desain',
      'Animasi & efek interaktif',
      'Optimasi performa & SEO dasar',
    ],
    tools: ['HTML5', 'CSS3', 'JavaScript', 'React'],
  },
  networking: {
    title: 'Networking & Infrastruktur',
    icon: 'fa-network-wired',
    color: 'linear-gradient(135deg,var(--orange),#ff9900)',
    desc: 'Konfigurasi dan manajemen jaringan untuk kebutuhan bisnis maupun personal, menggunakan perangkat Cisco dan Mikrotik.',
    points: [
      'Konfigurasi router & switch Cisco',
      'Setup & manajemen Mikrotik',
      'Desain topologi LAN/WAN',
      'Troubleshooting jaringan',
      'Keamanan jaringan dasar (firewall, ACL)',
    ],
    tools: ['Cisco', 'Mikrotik', 'LAN/WAN', 'Packet Tracer'],
  },
  warehouse: {
    title: 'Warehouse Management',
    icon: 'fa-warehouse',
    color: 'linear-gradient(135deg,var(--green),#00aaaa)',
    desc: 'Konsultasi dan implementasi sistem pengelolaan gudang yang efisien, berdasarkan pengalaman 2+ tahun di industri warehouse.',
    points: [
      'Implementasi sistem WMS',
      'Optimasi alur kerja inbound/outbound',
      'Pengelolaan inventory & stock opname',
      'Analisis data planning harian',
      'Training & SOP untuk tim baru',
    ],
    tools: ['WMS', 'SAP', 'MS Excel', 'FIFO/FEFO/LIFO'],
  },
};

function openService(key) {
  const d = serviceData[key];
  if (!d) return;
  const body = document.getElementById('svcModalBody');
  body.innerHTML = `
    <div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">
      <div style="width:52px;height:52px;border-radius:14px;background:${d.color};display:flex;align-items:center;justify-content:center;font-size:1.4rem;color:#fff;flex-shrink:0;">
        <i class="fa-solid ${d.icon}"></i>
      </div>
      <h2 style="font-family:'Orbitron',sans-serif;font-size:1.2rem;color:var(--cyan);margin:0;">${d.title}</h2>
    </div>
    <p>${d.desc}</p>
    <p style="color:var(--cyan);font-weight:600;font-size:.88rem;margin-bottom:.6rem;">Yang saya tawarkan:</p>
    <ul>${d.points.map(p => `<li>${p}</li>`).join('')}</ul>
    <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem;">
      ${d.tools.map(t => `<span style="padding:.25rem .9rem;background:rgba(0,245,255,.08);border:1px solid rgba(0,245,255,.2);border-radius:99px;font-size:.76rem;color:var(--cyan);">${t}</span>`).join('')}
    </div>
    <a href="#contact" onclick="closeService()" class="svc-cta"><i class="fa-solid fa-paper-plane"></i> Hubungi Saya</a>
  `;
  document.getElementById('svcModal').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeService() {
  const m = document.getElementById('svcModal');
  if (m) m.classList.remove('active');
  document.body.style.overflow = '';
}

/* ── BOTTOM NAVIGATION (mobile) ─────────────────────────────── */
const moreBtn       = document.getElementById('bnav-more');
const moreDrawer    = document.getElementById('more-drawer');
const drawerOverlay = document.getElementById('drawer-overlay');

function openDrawer() {
  moreDrawer.classList.add('open');
  drawerOverlay.classList.add('show');
  document.body.style.overflow = 'hidden';
}
function closeDrawer() {
  if (!moreDrawer) return;
  moreDrawer.classList.remove('open');
  drawerOverlay.classList.remove('show');
  document.body.style.overflow = '';
}
if (moreBtn)       moreBtn.addEventListener('click', openDrawer);
if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);
let touchStartY = 0;
if (moreDrawer) {
  moreDrawer.addEventListener('touchstart', e => { touchStartY = e.touches[0].clientY; }, { passive: true });
  moreDrawer.addEventListener('touchmove', e => {
    if (e.touches[0].clientY - touchStartY > 60) closeDrawer();
  }, { passive: true });
}

/* ── EMAILJS CONTACT FORM ────────────────────────────────────── */
emailjs.init('e5aNPE_8ZtiQfSTYP');

window.sendEmail = function(e) {
  e.preventDefault();
  const btn    = document.getElementById('submitBtn');
  const status = document.getElementById('formStatus');
  btn.disabled = true;
  btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Mengirim...';
  status.textContent = '';
  status.className   = '';

  const params = {
    from_name:  document.getElementById('from_name').value,
    from_email: document.getElementById('from_email').value,
    subject:    document.getElementById('subject').value,
    message:    document.getElementById('message').value,
  };

  emailjs.send('service_ib293ve', 'template_jzhdma7', params)
    .then(() => {
      status.textContent = '✅ Pesan berhasil dikirim! Saya akan segera membalas.';
      status.className   = 'success';
      document.getElementById('contactForm').reset();
    })
    .catch(() => {
      status.textContent = '❌ Gagal mengirim. Coba hubungi via WhatsApp atau Email.';
      status.className   = 'error';
    })
    .finally(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Kirim Pesan';
    });
};

/* ── EMAIL OBFUSCATION ──────────────────────────────────────── */
window.openMail = function () {
  window.location.href = 'mailto:bagasaditya1818@gmail.com';
};