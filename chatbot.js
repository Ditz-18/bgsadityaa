/* ============================================================
   BAGAS ADITYA — Ditz AI Chatbot
   chatbot.js
   Pure JS — No external API
   Bilingual: ID (Indonesia) ↔ EN (English)
   ============================================================ */

(function () {
  /* ── KNOWLEDGE BASE ──────────────────────────────────────── */
  const KB = {
    profile: {
      name: 'Bagas Aditya',
      location: 'Cirebon, Indonesia',
      education: 'SMK Manba\'ul \'Ulum – Teknik Komputer dan Jaringan (TKJ), 2019–2022',
      email: 'bagasaditya1818@gmail.com',
      linkedin: 'linkedin.com/in/bgsadityaa',
      whatsapp: '+62 814-6443-5341',
      instagram: '@bgs_adityaa',
    },

    experience: [
      {
        company: 'PT Paragon Corp',
        role: { id: 'E-commerce Support Operator (Logistik)', en: 'E-commerce Support Operator (Logistics)' },
        start: { year: 2026, month: 1, day: 17 },
        end:   { year: 2026, month: 4, day: 15 },
        durationDays: 89,
        field: ['warehouse', 'ecommerce', 'logistik', 'logistics'],
        points: {
          id: [
            'Mengelola alur fulfillment end-to-end: inbound, picking & packing, dispatch, loading & unloading',
            'Penyusunan barang ke sistem rak berbasis koordinat untuk efisiensi picking order',
            'Kontrol order harian memastikan akurasi pengiriman di lingkungan e-commerce volume tinggi',
          ],
          en: [
            'Managing end-to-end fulfillment flow: inbound, picking & packing, dispatch, loading & unloading',
            'Arranging goods into coordinate-based rack system for picking order efficiency',
            'Daily order control ensuring delivery accuracy in high-volume e-commerce environment',
          ],
        },
      },
      {
        company: 'PT Sohou Kikaku Indonesia',
        role: { id: 'Operator Produksi (Machining)', en: 'Production Operator (Machining)' },
        start: { year: 2025, month: 12, day: 12 },
        end:   { year: 2026, month: 1, day: 15 },
        durationDays: 34,
        field: ['produksi', 'machining', 'manufacturing', 'production'],
        points: {
          id: [
            'Proses Countersink pada komponen logam; kontrol kualitas part terhadap drawing',
            'Pengukuran dimensi part menggunakan kaliper untuk memastikan presisi produksi',
          ],
          en: [
            'Countersink process on metal components; part quality control against drawing',
            'Part dimension measurement using calipers to ensure production precision',
          ],
        },
      },
      {
        company: 'PT Astra Honda Motor',
        role: { id: 'Warehouse Operator & Controller', en: 'Warehouse Operator & Controller' },
        start: { year: 2023, month: 4, day: 3 },
        end:   { year: 2025, month: 10, day: 31 },
        durationDays: 942,
        field: ['warehouse', 'ahm', 'astra', 'honda', 'logistik', 'logistics'],
        points: {
          id: [
            'Warehouse Management System (WMS)',
            'Preparation & Scan Transaction in System',
            'Input, Output, Monitoring & Rekap data planning harian',
            'Analisis data planning harian',
            'Menjalankan sistem FIFO / FEFO / LIFO',
            'Penerimaan barang – Inbound / Receiving',
            'Stock Keeping Unit (SKU) & Stock Opname',
            'Perbantuan All Job & Teacher for New Manpower',
          ],
          en: [
            'Warehouse Management System (WMS)',
            'Preparation & Scan Transaction in System',
            'Input, Output, Monitoring & Daily Planning Data Recap',
            'Daily Planning Data Analysis',
            'Implementing FIFO / FEFO / LIFO systems',
            'Goods Receipt – Inbound / Receiving',
            'Stock Keeping Unit (SKU) & Stock Opname',
            'All Job Assistance & Trainer for New Manpower',
          ],
        },
      },
      {
        company: 'Yogya Group',
        role: { id: 'Warehouse Operator', en: 'Warehouse Operator' },
        start: { year: 2023, month: 3, day: 10 },
        end:   { year: 2023, month: 3, day: 24 },
        durationDays: 14,
        field: ['warehouse', 'yogya', 'logistik', 'logistics'],
        points: {
          id: ['Preparation Transaction for Delivery'],
          en: ['Preparation Transaction for Delivery'],
        },
      },
      {
        company: 'HD Computer',
        role: { id: 'Service Assistant (PKL)', en: 'Service Assistant (Internship)' },
        start: { year: 2021, month: 8, day: 1 },
        end:   { year: 2021, month: 11, day: 30 },
        durationDays: 121,
        field: ['pkl', 'internship', 'komputer', 'computer', 'hardware', 'teknik'],
        points: {
          id: [
            'Membantu memperbaiki Troubleshooting pada komputer',
            'Instalasi Software',
            'Service & Rakit PC',
          ],
          en: [
            'Assisting in computer troubleshooting and repair',
            'Software Installation',
            'PC Servicing & Assembly',
          ],
        },
      },
    ],

    skills: {
      web:       [{ name: 'HTML', pct: 90 }, { name: 'CSS', pct: 85 }, { name: 'JavaScript', pct: 70 }, { name: 'React', pct: 55 }],
      network:   [{ name: 'Cisco', pct: 80 }, { name: 'Mikrotik', pct: 75 }],
      office:    [{ name: 'MS Word', pct: 90 }, { name: 'MS Excel', pct: 85 }],
      warehouse: [{ name: 'SAP', pct: 78 }, { name: 'Data Mgmt', pct: 85 }, { name: 'WH Controller', pct: 88 }, { name: 'WH Operator', pct: 92 }, { name: 'Forklift', pct: 80 }],
      soft:      ['Public Speaking', 'Hardware', 'Software', 'Brainware', 'Troubleshooting', 'Komunikasi / Communication', 'Marketing'],
    },

    certificates: [
      { name: 'Dasar Pemrograman Web', issuer: 'Dicoding Indonesia', year: 2022, field: 'web' },
      { name: 'Dasar Pemrograman', issuer: 'Dicoding Indonesia', year: 2022, field: 'web' },
      { name: 'Cisco CCNA', issuer: 'Skill Academy', year: 2022, field: 'network' },
      { name: 'Operator Forklift', issuer: 'BBPVP Bandung', year: 2025, field: 'warehouse' },
      { name: 'Front-End Web', issuer: 'Dicoding Indonesia', year: 2024, field: 'web' },
      { name: 'JavaScript', issuer: 'Dicoding Indonesia', year: 2024, field: 'web' },
      { name: 'Microsoft Excel', issuer: 'Pijar Mahir', year: 2022, field: 'microsoft' },
      { name: 'Microsoft Word', issuer: 'Pijar Mahir', year: 2022, field: 'microsoft' },
      { name: 'Artificial Intelligence (AI)', issuer: 'Dicoding Indonesia', year: 2025, field: 'web' },
      { name: 'React JS', issuer: 'Dicoding Indonesia', year: 2024, field: 'web' },
      { name: 'Pengelolaan Keuangan / Financial Management', issuer: 'Skill Academy', year: 2022, field: 'other' },
      { name: 'Google & AWS', issuer: 'Google / AWS', year: 2024, field: 'web' },
    ],

    projects: [
      {
        name: 'Ngaji Yuk',
        desc: { id: 'Aplikasi PWA pencatat tilawah Al-Qur\'an harian. Fitur: jadwal sholat, kompas kiblat, kalkulator zakat, kalender hijriyah, buku tajwid, dan AI Chatbot Islami.', en: 'A PWA for daily Qur\'an recitation tracking. Features: prayer schedule, qibla compass, zakat calculator, Hijri calendar, tajwid guide, Islamic AI Chatbot.' },
        tags: ['PWA', 'JavaScript', 'AI Chatbot'],
        url: 'https://ngajiyuk-app.netlify.app',
      },
      {
        name: 'Ditz Money',
        desc: { id: 'Aplikasi manajemen keuangan personal berbasis web. Fitur: dashboard laporan, scan struk, catat transaksi, budget, net worth, cicilan, tabungan, split bill, dan Ditz AI.', en: 'A web-based personal finance management app. Features: report dashboard, receipt scanner, transactions, budgeting, net worth, installments, savings goals, split bill, and Ditz AI.' },
        tags: ['PWA', 'Finance', 'JavaScript', 'AI Chatbot'],
        url: 'https://ditzmoney.netlify.app',
      },
      {
        name: 'QR Code Generator',
        desc: { id: 'Generate QR Code dan Barcode berkualitas tinggi secara instan. Sesuaikan warna, ukuran, dan format.', en: 'Generate high-quality QR Codes and Barcodes instantly. Customize colors, sizes, and formats.' },
        tags: ['QR', 'Barcode', 'Download'],
        url: 'qr.html',
      },
      {
        name: 'Web Portfolio Personal',
        desc: { id: 'Portfolio website dengan design modern dan responsive menggunakan HTML, CSS, dan JavaScript murni.', en: 'Portfolio website with modern and responsive design using pure HTML, CSS, and JavaScript.' },
        tags: ['HTML', 'CSS', 'JavaScript'],
        url: '#home',
      },
    ],

    services: {
      id: ['Front-End Development', 'Networking & Infrastruktur', 'Warehouse Management'],
      en: ['Front-End Development', 'Networking & Infrastructure', 'Warehouse Management'],
    },
  };

  /* ── HELPER: hitung total durasi (dalam bulan & hari) ─────── */
  function calcTotalDuration(filter) {
    const exps = filter
      ? KB.experience.filter(e => e.field.some(f => filter.includes(f)))
      : KB.experience;
    const totalDays = exps.reduce((sum, e) => sum + e.durationDays, 0);
    const years  = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const days   = totalDays % 30;
    return { years, months, days, totalDays, exps };
  }

  function formatDuration(dur, lang) {
    const parts = [];
    if (dur.years > 0)  parts.push(lang === 'id' ? `${dur.years} tahun` : `${dur.years} year${dur.years > 1 ? 's' : ''}`);
    if (dur.months > 0) parts.push(lang === 'id' ? `${dur.months} bulan` : `${dur.months} month${dur.months > 1 ? 's' : ''}`);
    if (dur.days > 0 && dur.years === 0) parts.push(lang === 'id' ? `${dur.days} hari` : `${dur.days} day${dur.days > 1 ? 's' : ''}`);
    return parts.join(lang === 'id' ? ' ' : ' ');
  }

  /* ── NLP / INTENT ENGINE ─────────────────────────────────── */
  function getLang() {
    return (typeof currentLang !== 'undefined' ? currentLang : localStorage.getItem('lang')) || 'id';
  }

  function normalize(text) {
    return text.toLowerCase()
      .replace(/[?!.,;:]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
  }

  function contains(text, keywords) {
    return keywords.some(k => text.includes(k));
  }

  function processMessage(raw) {
    const lang = getLang();
    const text = normalize(raw);

    // ── Sapa / Greeting
    if (contains(text, ['halo', 'hai', 'hello', 'hi', 'hey', 'hy', 'selamat', 'pagi', 'siang', 'malam', 'sore'])) {
      return lang === 'id'
        ? `Halo! 👋 Saya **Ditz AI**, asisten virtual Bagas Aditya.\nAda yang ingin kamu tanyakan tentang profil, pengalaman, skill, atau project Bagas?`
        : `Hello! 👋 I'm **Ditz AI**, Bagas Aditya's virtual assistant.\nWhat would you like to know about Bagas's profile, experience, skills, or projects?`;
    }

    // ── Siapa kamu / who are you
    if (contains(text, ['siapa kamu', 'kamu siapa', 'who are you', 'kamu apa', 'what are you', 'ditz'])) {
      return lang === 'id'
        ? `Saya **Ditz AI** 🤖 — asisten virtual yang dibuat khusus untuk portfolio Bagas Aditya.\nSaya bisa menjawab pertanyaan seputar profil, pengalaman kerja, skill, sertifikat, dan project-nya.`
        : `I'm **Ditz AI** 🤖 — a virtual assistant built specifically for Bagas Aditya's portfolio.\nI can answer questions about his profile, work experience, skills, certificates, and projects.`;
    }

    // ── Profil / About
    if (contains(text, ['profil', 'profile', 'tentang', 'about', 'biodata', 'siapa bagas', 'who is bagas', 'perkenalan', 'introduce'])) {
      return lang === 'id'
        ? `👤 **Profil Bagas Aditya**\n\n📍 Lokasi: Cirebon, Indonesia\n🎓 Pendidikan: SMK Manba'ul 'Ulum – TKJ (2019–2022)\n💼 Bidang: Front-End Development, Networking, Warehouse\n📧 Email: bagasaditya1818@gmail.com\n📱 WhatsApp: +62 814-6443-5341\n🔗 LinkedIn: linkedin.com/in/bgsadityaa`
        : `👤 **Bagas Aditya's Profile**\n\n📍 Location: Cirebon, Indonesia\n🎓 Education: SMK Manba'ul 'Ulum – Computer & Network Engineering (2019–2022)\n💼 Fields: Front-End Development, Networking, Warehouse\n📧 Email: bagasaditya1818@gmail.com\n📱 WhatsApp: +62 814-6443-5341\n🔗 LinkedIn: linkedin.com/in/bgsadityaa`;
    }

    // ── Kontak / Contact
    if (contains(text, ['kontak', 'contact', 'hubungi', 'reach', 'email', 'whatsapp', 'wa', 'linkedin', 'instagram', 'github'])) {
      return lang === 'id'
        ? `📬 **Info Kontak Bagas Aditya**\n\n📧 Email: bagasaditya1818@gmail.com\n📱 WhatsApp: +62 814-6443-5341\n🔗 LinkedIn: linkedin.com/in/bgsadityaa\n📸 Instagram: @bgs_adityaa\n\nKamu juga bisa langsung ke section Contact di portfolio ini!`
        : `📬 **Bagas Aditya's Contact Info**\n\n📧 Email: bagasaditya1818@gmail.com\n📱 WhatsApp: +62 814-6443-5341\n🔗 LinkedIn: linkedin.com/in/bgsadityaa\n📸 Instagram: @bgs_adityaa\n\nYou can also go directly to the Contact section in this portfolio!`;
    }

    // ── Total pengalaman kerja keseluruhan
    if (
      contains(text, ['total', 'berapa lama', 'how long', 'pengalaman kerja', 'work experience', 'lama kerja', 'lama bekerja', 'keseluruhan', 'overall', 'semua pengalaman', 'all experience']) &&
      !contains(text, ['warehouse', 'gudang', 'ahm', 'astra', 'paragon', 'yogya', 'sohou', 'machining', 'produksi'])
    ) {
      const dur = calcTotalDuration(null);
      const formatted = formatDuration(dur, lang);
      const list = dur.exps.map(e => `• ${e.company} (${e.role[lang]})`).join('\n');
      return lang === 'id'
        ? `📊 **Total Pengalaman Kerja Bagas**\n\nBagas memiliki total pengalaman kerja selama **${formatted}** (${dur.totalDays} hari) dari semua perusahaan:\n\n${list}\n\nIngin tahu detail salah satu perusahaan?`
        : `📊 **Bagas's Total Work Experience**\n\nBagas has a total work experience of **${formatted}** (${dur.totalDays} days) across all companies:\n\n${list}\n\nWant to know details about a specific company?`;
    }

    // ── Pengalaman di Warehouse (semua gabungan)
    if (contains(text, ['warehouse', 'gudang', 'pergudangan']) && contains(text, ['total', 'berapa lama', 'how long', 'lama', 'keseluruhan', 'gabungan', 'combined', 'semua', 'all'])) {
      const dur = calcTotalDuration(['warehouse', 'logistik', 'logistics', 'ecommerce']);
      const formatted = formatDuration(dur, lang);
      const list = dur.exps.map(e => `• ${e.company} — ${formatDuration({ years: Math.floor(e.durationDays/365), months: Math.floor((e.durationDays%365)/30), days: e.durationDays%30, totalDays: e.durationDays }, lang)}`).join('\n');
      return lang === 'id'
        ? `🏭 **Total Pengalaman di Bidang Warehouse/Logistik**\n\nTotal: **${formatted}** dari:\n\n${list}\n\nMencakup WMS, SAP, FIFO/FEFO, picking, packing, inbound/outbound, dan e-commerce fulfillment.`
        : `🏭 **Total Warehouse/Logistics Experience**\n\nTotal: **${formatted}** from:\n\n${list}\n\nCovers WMS, SAP, FIFO/FEFO, picking, packing, inbound/outbound, and e-commerce fulfillment.`;
    }

    // ── Pengalaman di AHM / Astra Honda Motor
    if (contains(text, ['ahm', 'astra', 'honda', 'astra honda'])) {
      const exp = KB.experience.find(e => e.company.includes('Astra Honda'));
      const points = exp.points[lang].map(p => `• ${p}`).join('\n');
      return lang === 'id'
        ? `🏢 **PT Astra Honda Motor**\n\n🎯 Posisi: ${exp.role.id}\n📅 Periode: 03 Apr 2023 – 31 Okt 2025\n⏱️ Durasi: ~${formatDuration(calcTotalDuration(['ahm','astra','honda']), lang)}\n\n📋 Jobdesk:\n${points}`
        : `🏢 **PT Astra Honda Motor**\n\n🎯 Position: ${exp.role.en}\n📅 Period: Apr 3, 2023 – Oct 31, 2025\n⏱️ Duration: ~${formatDuration(calcTotalDuration(['ahm','astra','honda']), lang)}\n\n📋 Responsibilities:\n${points}`;
    }

    // ── Pengalaman di Paragon
    if (contains(text, ['paragon'])) {
      const exp = KB.experience.find(e => e.company.includes('Paragon'));
      const points = exp.points[lang].map(p => `• ${p}`).join('\n');
      return lang === 'id'
        ? `🏢 **PT Paragon Corp**\n\n🎯 Posisi: ${exp.role.id}\n📅 Periode: 17 Jan – 15 Apr 2026\n⏱️ Durasi: ±3 bulan\n\n📋 Jobdesk:\n${points}`
        : `🏢 **PT Paragon Corp**\n\n🎯 Position: ${exp.role.en}\n📅 Period: Jan 17 – Apr 15, 2026\n⏱️ Duration: ~3 months\n\n📋 Responsibilities:\n${points}`;
    }

    // ── Pengalaman di Yogya
    if (contains(text, ['yogya', 'yogya group'])) {
      const exp = KB.experience.find(e => e.company.includes('Yogya'));
      return lang === 'id'
        ? `🏢 **Yogya Group**\n\n🎯 Posisi: ${exp.role.id}\n📅 Periode: 10 – 24 Mar 2023\n⏱️ Durasi: 14 hari\n\n📋 Jobdesk:\n• ${exp.points.id[0]}`
        : `🏢 **Yogya Group**\n\n🎯 Position: ${exp.role.en}\n📅 Period: Mar 10 – 24, 2023\n⏱️ Duration: 14 days\n\n📋 Responsibilities:\n• ${exp.points.en[0]}`;
    }

    // ── Pengalaman di Sohou
    if (contains(text, ['sohou', 'machining', 'produksi', 'production'])) {
      const exp = KB.experience.find(e => e.company.includes('Sohou'));
      const points = exp.points[lang].map(p => `• ${p}`).join('\n');
      return lang === 'id'
        ? `🏢 **PT Sohou Kikaku Indonesia**\n\n🎯 Posisi: ${exp.role.id}\n📅 Periode: 12 Des 2025 – 15 Jan 2026\n⏱️ Durasi: ±1 bulan\n\n📋 Jobdesk:\n${points}`
        : `🏢 **PT Sohou Kikaku Indonesia**\n\n🎯 Position: ${exp.role.en}\n📅 Period: Dec 12, 2025 – Jan 15, 2026\n⏱️ Duration: ~1 month\n\n📋 Responsibilities:\n${points}`;
    }

    // ── PKL / HD Computer
    if (contains(text, ['hd computer', 'pkl', 'magang', 'internship', 'praktik kerja'])) {
      const exp = KB.experience.find(e => e.company.includes('HD'));
      const points = exp.points[lang].map(p => `• ${p}`).join('\n');
      return lang === 'id'
        ? `🖥️ **HD Computer (PKL)**\n\n🎯 Posisi: ${exp.role.id}\n📅 Periode: Agustus – November 2021\n⏱️ Durasi: ±4 bulan\n\n📋 Jobdesk:\n${points}`
        : `🖥️ **HD Computer (Internship)**\n\n🎯 Position: ${exp.role.en}\n📅 Period: August – November 2021\n⏱️ Duration: ~4 months\n\n📋 Responsibilities:\n${points}`;
    }

    // ── Daftar semua pengalaman
    if (contains(text, ['pengalaman', 'experience', 'riwayat kerja', 'work history', 'pernah kerja', 'worked at', 'perusahaan', 'company', 'companies'])) {
      const list = KB.experience.map((e, i) =>
        `${i + 1}. **${e.company}** — ${e.role[lang]}`
      ).join('\n');
      return lang === 'id'
        ? `💼 **Riwayat Pengalaman Kerja Bagas**\n\n${list}\n\nTanyakan lebih detail tentang salah satu perusahaan di atas!`
        : `💼 **Bagas's Work Experience History**\n\n${list}\n\nAsk for more details about any of the companies above!`;
    }

    // ── Skills / Keahlian
    if (contains(text, ['skill', 'keahlian', 'kemampuan', 'ability', 'bisa apa', 'what can', 'ahli', 'expert'])) {
      if (contains(text, ['web', 'frontend', 'front-end', 'html', 'css', 'javascript', 'js', 'react'])) {
        const list = KB.skills.web.map(s => `• ${s.name}: ${s.pct}%`).join('\n');
        return lang === 'id'
          ? `💻 **Skill Web Development**\n\n${list}`
          : `💻 **Web Development Skills**\n\n${list}`;
      }
      if (contains(text, ['network', 'jaringan', 'cisco', 'mikrotik', 'networking'])) {
        const list = KB.skills.network.map(s => `• ${s.name}: ${s.pct}%`).join('\n');
        return lang === 'id'
          ? `🌐 **Skill Networking**\n\n${list}`
          : `🌐 **Networking Skills**\n\n${list}`;
      }
      if (contains(text, ['warehouse', 'gudang', 'wms', 'sap', 'forklift', 'inventory'])) {
        const list = KB.skills.warehouse.map(s => `• ${s.name}: ${s.pct}%`).join('\n');
        return lang === 'id'
          ? `🏭 **Skill Warehouse**\n\n${list}`
          : `🏭 **Warehouse Skills**\n\n${list}`;
      }
      if (contains(text, ['excel', 'word', 'office', 'microsoft'])) {
        const list = KB.skills.office.map(s => `• ${s.name}: ${s.pct}%`).join('\n');
        return lang === 'id'
          ? `📊 **Skill Microsoft Office**\n\n${list}`
          : `📊 **Microsoft Office Skills**\n\n${list}`;
      }
      // Semua skill
      const web  = KB.skills.web.map(s => `${s.name}(${s.pct}%)`).join(', ');
      const net  = KB.skills.network.map(s => `${s.name}(${s.pct}%)`).join(', ');
      const wh   = KB.skills.warehouse.map(s => `${s.name}(${s.pct}%)`).join(', ');
      const off  = KB.skills.office.map(s => `${s.name}(${s.pct}%)`).join(', ');
      const soft = KB.skills.soft.join(', ');
      return lang === 'id'
        ? `⚡ **Skill Bagas Aditya**\n\n💻 Web: ${web}\n🌐 Networking: ${net}\n🏭 Warehouse: ${wh}\n📊 Office: ${off}\n🧠 Soft Skills: ${soft}`
        : `⚡ **Bagas Aditya's Skills**\n\n💻 Web: ${web}\n🌐 Networking: ${net}\n🏭 Warehouse: ${wh}\n📊 Office: ${off}\n🧠 Soft Skills: ${soft}`;
    }

    // ── Pendidikan / Education
    if (contains(text, ['pendidikan', 'education', 'sekolah', 'school', 'smk', 'tkj', 'lulus', 'graduate', 'kuliah', 'jurusan', 'major'])) {
      return lang === 'id'
        ? `🎓 **Riwayat Pendidikan Bagas**\n\n1. **SDN 3 Warukawung** — Pendidikan Dasar (2010–2016)\n2. **MTS Mafatihul Huda** — Pendidikan Menengah Pertama (2016–2019)\n3. **SMK Manba'ul 'Ulum** — Teknik Komputer dan Jaringan / TKJ (2019–2022)`
        : `🎓 **Bagas's Education History**\n\n1. **SDN 3 Warukawung** — Elementary School (2010–2016)\n2. **MTS Mafatihul Huda** — Junior High School (2016–2019)\n3. **SMK Manba'ul 'Ulum** — Computer & Network Engineering / TKJ (2019–2022)`;
    }

    // ── Sertifikat / Certificates
    if (contains(text, ['sertifikat', 'certificate', 'sertifikasi', 'certification', 'lisensi', 'license'])) {
      if (contains(text, ['berapa', 'how many', 'total', 'jumlah'])) {
        return lang === 'id'
          ? `🏆 Bagas memiliki total **${KB.certificates.length} sertifikat** dari berbagai bidang:\n\n• Web Development: ${KB.certificates.filter(c => c.field === 'web').length} sertifikat\n• Networking: ${KB.certificates.filter(c => c.field === 'network').length} sertifikat\n• Warehouse: ${KB.certificates.filter(c => c.field === 'warehouse').length} sertifikat\n• Microsoft: ${KB.certificates.filter(c => c.field === 'microsoft').length} sertifikat\n• Lainnya: ${KB.certificates.filter(c => c.field === 'other').length} sertifikat`
          : `🏆 Bagas has a total of **${KB.certificates.length} certificates** across various fields:\n\n• Web Development: ${KB.certificates.filter(c => c.field === 'web').length} certificates\n• Networking: ${KB.certificates.filter(c => c.field === 'network').length} certificate\n• Warehouse: ${KB.certificates.filter(c => c.field === 'warehouse').length} certificate\n• Microsoft: ${KB.certificates.filter(c => c.field === 'microsoft').length} certificates\n• Others: ${KB.certificates.filter(c => c.field === 'other').length} certificate`;
      }
      const list = KB.certificates.map((c, i) => `${i + 1}. **${c.name}** — ${c.issuer} (${c.year})`).join('\n');
      return lang === 'id'
        ? `🏆 **Sertifikat Bagas Aditya** (${KB.certificates.length} total)\n\n${list}`
        : `🏆 **Bagas Aditya's Certificates** (${KB.certificates.length} total)\n\n${list}`;
    }

    // ── Projects
    if (contains(text, ['project', 'projek', 'proyek', 'portfolio', 'aplikasi', 'app', 'website', 'web app', 'karya', 'work'])) {
      if (contains(text, ['ngaji', 'quran', 'alquran', 'al-quran', 'qur\'an', 'tilawah', 'sholat'])) {
        const p = KB.projects[0];
        return lang === 'id'
          ? `📱 **${p.name}**\n\n${p.desc.id}\n\n🏷️ Tags: ${p.tags.join(', ')}\n🔗 Link: ${p.url}`
          : `📱 **${p.name}**\n\n${p.desc.en}\n\n🏷️ Tags: ${p.tags.join(', ')}\n🔗 Link: ${p.url}`;
      }
      if (contains(text, ['ditz money', 'keuangan', 'finance', 'money', 'uang'])) {
        const p = KB.projects[1];
        return lang === 'id'
          ? `💰 **${p.name}**\n\n${p.desc.id}\n\n🏷️ Tags: ${p.tags.join(', ')}\n🔗 Link: ${p.url}`
          : `💰 **${p.name}**\n\n${p.desc.en}\n\n🏷️ Tags: ${p.tags.join(', ')}\n🔗 Link: ${p.url}`;
      }
      if (contains(text, ['qr', 'barcode', 'qr code', 'generator'])) {
        const p = KB.projects[2];
        return lang === 'id'
          ? `📷 **${p.name}**\n\n${p.desc.id}\n\n🏷️ Tags: ${p.tags.join(', ')}`
          : `📷 **${p.name}**\n\n${p.desc.en}\n\n🏷️ Tags: ${p.tags.join(', ')}`;
      }
      // Semua project
      const list = KB.projects.map((p, i) => `${i + 1}. **${p.name}** — ${p.tags.join(', ')}`).join('\n');
      return lang === 'id'
        ? `🚀 **Projects Bagas Aditya** (${KB.projects.length} project)\n\n${list}\n\nTanyakan detail project tertentu untuk info lebih lanjut!`
        : `🚀 **Bagas Aditya's Projects** (${KB.projects.length} projects)\n\n${list}\n\nAsk about a specific project for more details!`;
    }

    // ── Layanan / Services
    if (contains(text, ['layanan', 'service', 'jasa', 'menawarkan', 'offer', 'bisa bantu', 'can help'])) {
      const list = KB.services[lang].map((s, i) => `${i + 1}. ${s}`).join('\n');
      return lang === 'id'
        ? `🛠️ **Layanan yang Ditawarkan Bagas**\n\n${list}\n\nUntuk detail lebih lanjut, kunjungi section "Layanan" di portfolio ini atau hubungi langsung!`
        : `🛠️ **Services Offered by Bagas**\n\n${list}\n\nFor more details, visit the "Services" section in this portfolio or contact directly!`;
    }

    // ── Forklift
    if (contains(text, ['forklift', 'operator forklift'])) {
      return lang === 'id'
        ? `🚜 Bagas memiliki **Sertifikat Operator Forklift** resmi dari **BBPVP Bandung** (Oktober 2025), dan sudah tercantum di skill dengan profisiensi **80%**.`
        : `🚜 Bagas holds an official **Forklift Operator Certificate** from **BBPVP Bandung** (October 2025), with a skill proficiency of **80%**.`;
    }

    // ── SAP
    if (contains(text, ['sap'])) {
      return lang === 'id'
        ? `💼 Bagas menguasai **SAP** dengan profisiensi **78%**, digunakan aktif saat bekerja di **PT Astra Honda Motor** untuk sistem warehouse management.`
        : `💼 Bagas is proficient in **SAP** at **78%**, actively used during his time at **PT Astra Honda Motor** for warehouse management systems.`;
    }

    // ── WMS
    if (contains(text, ['wms', 'warehouse management system'])) {
      return lang === 'id'
        ? `📦 Bagas berpengalaman menggunakan **Warehouse Management System (WMS)** di PT Astra Honda Motor (2+ tahun). Keahlian ini mencakup scan transaksi, monitoring data planning, stock opname, dan FIFO/FEFO/LIFO.`
        : `📦 Bagas has hands-on experience with **Warehouse Management System (WMS)** at PT Astra Honda Motor (2+ years), covering scan transactions, planning data monitoring, stock opname, and FIFO/FEFO/LIFO.`;
    }

    // ── React
    if (contains(text, ['react', 'reactjs', 'react js'])) {
      return lang === 'id'
        ? `⚛️ Bagas mempelajari **React JS** dan memiliki sertifikat React JS dari **Dicoding Indonesia** (Oktober 2024), dengan skill level **55%** dan terus berkembang.`
        : `⚛️ Bagas has studied **React JS** and holds a React JS certificate from **Dicoding Indonesia** (October 2024), with a skill level of **55%** and growing.`;
    }

    // ── Cisco / Mikrotik / Networking
    if (contains(text, ['cisco', 'mikrotik', 'ccna', 'jaringan', 'network', 'lan', 'wan'])) {
      return lang === 'id'
        ? `🌐 **Skill Networking Bagas**\n\n• Cisco: 80% — Sertifikat CCNA dari Skill Academy (2022)\n• Mikrotik: 75%\n\nKemampuan mencakup konfigurasi router & switch, desain topologi LAN/WAN, troubleshooting, dan keamanan jaringan dasar.`
        : `🌐 **Bagas's Networking Skills**\n\n• Cisco: 80% — CCNA Certificate from Skill Academy (2022)\n• Mikrotik: 75%\n\nCapabilities include router & switch configuration, LAN/WAN topology design, troubleshooting, and basic network security.`;
    }

    // ── Lokasi / Location
    if (contains(text, ['lokasi', 'location', 'tinggal', 'live', 'domisili', 'domicile', 'alamat', 'address', 'kota', 'city', 'cirebon'])) {
      return lang === 'id'
        ? `📍 Bagas Aditya berdomisili di **Cirebon, Indonesia**.`
        : `📍 Bagas Aditya is based in **Cirebon, Indonesia**.`;
    }

    // ── Terima kasih
    if (contains(text, ['terima kasih', 'thanks', 'thank you', 'makasih', 'thx', 'ty'])) {
      return lang === 'id'
        ? `Sama-sama! 😊 Ada hal lain yang ingin kamu tanyakan tentang Bagas?`
        : `You're welcome! 😊 Is there anything else you'd like to know about Bagas?`;
    }

    // ── Bye
    if (contains(text, ['bye', 'dadah', 'sampai jumpa', 'goodbye', 'selamat tinggal', 'ciao'])) {
      return lang === 'id'
        ? `Sampai jumpa! 👋 Semoga informasi yang saya berikan bermanfaat. Jangan ragu untuk kembali jika ada pertanyaan lagi!`
        : `Goodbye! 👋 Hope the information was helpful. Feel free to come back if you have more questions!`;
    }

    // ── Fallback
    return lang === 'id'
      ? `Hmm, saya belum bisa menjawab itu 🤔\n\nCoba tanyakan tentang:\n• Profil / biodata Bagas\n• Pengalaman kerja (AHM, Paragon, Yogya, dll)\n• Skill & keahlian\n• Sertifikat\n• Projects\n• Layanan\n• Kontak`
      : `Hmm, I'm not sure about that 🤔\n\nTry asking about:\n• Bagas's profile / bio\n• Work experience (AHM, Paragon, Yogya, etc.)\n• Skills & competencies\n• Certificates\n• Projects\n• Services\n• Contact info`;
  }

  /* ── RENDER MARKDOWN-LITE ─────────────────────────────────── */
  function renderText(text) {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\n/g, '<br>');
  }

  /* ── BUILD UI ─────────────────────────────────────────────── */
  const lang = () => getLang();

  // FAB Button
  const fabBtn = document.createElement('button');
  fabBtn.id = 'ditz-fab';
  fabBtn.innerHTML = '<i class="fa-solid fa-robot"></i>';
  fabBtn.title = 'Ditz AI';
  document.body.appendChild(fabBtn);

  // Chat Window
  const chatWin = document.createElement('div');
  chatWin.id = 'ditz-chat';
  chatWin.innerHTML = `
    <div class="ditz-header">
      <div class="ditz-header-info">
        <div class="ditz-avatar"><i class="fa-solid fa-robot"></i></div>
        <div>
          <div class="ditz-name">Ditz AI</div>
          <div class="ditz-status"><span class="ditz-dot"></span> <span id="ditz-status-txt">Online</span></div>
        </div>
      </div>
      <button class="ditz-close" id="ditz-close"><i class="fa-solid fa-xmark"></i></button>
    </div>
    <div class="ditz-messages" id="ditz-messages"></div>
    <div class="ditz-input-wrap">
      <input type="text" id="ditz-input" maxlength="200" />
      <button id="ditz-send"><i class="fa-solid fa-paper-plane"></i></button>
    </div>
  `;
  document.body.appendChild(chatWin);

  // Inject CSS
  const style = document.createElement('style');
  style.textContent = `
    /* ── FAB ── */
    #ditz-fab {
      position: fixed;
      right: 28px;
      bottom: 152px;
      width: 50px; height: 50px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00f5ff, #ff00e5);
      border: none; cursor: pointer;
      display: flex; align-items: center; justify-content: center;
      font-size: 1.2rem; color: #fff;
      box-shadow: 0 6px 24px rgba(0,245,255,.4), 0 0 0 0 rgba(0,245,255,.3);
      z-index: 1500;
      opacity: 0; visibility: hidden;
      transition: all .3s cubic-bezier(.4,0,.2,1);
      animation: ditzPulse 2.5s infinite;
    }
    #ditz-fab.show { opacity: 1; visibility: visible; }
    #ditz-fab:hover { transform: scale(1.12); box-shadow: 0 10px 32px rgba(0,245,255,.55); }
    @keyframes ditzPulse {
      0%,100% { box-shadow: 0 6px 24px rgba(0,245,255,.4), 0 0 0 0 rgba(0,245,255,.25); }
      50%      { box-shadow: 0 6px 24px rgba(0,245,255,.4), 0 0 0 10px rgba(0,245,255,.0); }
    }
    @media (max-width: 768px) {
      #ditz-fab {
        right: 16px;
        left: auto;
        transform: none;
        bottom: 152px;
        width: 46px; height: 46px; font-size: 1.1rem;
      }
      #ditz-fab.show { opacity: 1; visibility: visible; transform: none; }
      #ditz-fab:hover { transform: scale(1.1); }
    }

    /* ── CHAT WINDOW ── */
    #ditz-chat {
      position: fixed;
      right: 28px; bottom: 200px;
      width: 340px; max-height: 500px;
      background: rgba(10,14,39,.97);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(0,245,255,.18);
      border-radius: 20px;
      display: flex; flex-direction: column;
      overflow: hidden;
      z-index: 1499;
      box-shadow: 0 16px 60px rgba(0,0,0,.7), 0 0 0 1px rgba(255,255,255,.04) inset;
      opacity: 0; visibility: hidden; transform: translateY(16px) scale(.97);
      transition: all .3s cubic-bezier(.4,0,.2,1);
    }
    #ditz-chat.open { opacity:1; visibility:visible; transform: translateY(0) scale(1); }
    @media (max-width: 768px) {
      #ditz-chat {
        right: auto;
        left: 50%;
        transform: translateX(-50%) translateY(16px) scale(.97);
        bottom: 210px;
        width: calc(100vw - 32px); max-width: 400px;
        max-height: 420px;
      }
      #ditz-chat.open { transform: translateX(-50%) translateY(0) scale(1); }
    }

    /* ── HEADER ── */
    .ditz-header {
      display: flex; align-items: center; justify-content: space-between;
      padding: .85rem 1rem;
      background: linear-gradient(135deg, rgba(0,245,255,.08), rgba(255,0,229,.06));
      border-bottom: 1px solid rgba(0,245,255,.1);
      flex-shrink: 0;
    }
    .ditz-header-info { display:flex; align-items:center; gap:.7rem; }
    .ditz-avatar {
      width: 36px; height: 36px; border-radius: 50%;
      background: linear-gradient(135deg,#00f5ff,#ff00e5);
      display: flex; align-items: center; justify-content: center;
      font-size: .95rem; color: #fff; flex-shrink:0;
    }
    .ditz-name { font-family:'Orbitron',sans-serif; font-size:.82rem; color:#00f5ff; font-weight:700; }
    .ditz-status { display:flex; align-items:center; gap:.35rem; font-size:.7rem; color:#a8b2d1; margin-top:1px; }
    .ditz-dot { width:7px; height:7px; border-radius:50%; background:#00ff88; display:inline-block; animation: blink .9s infinite; }
    @keyframes blink { 0%,100%{opacity:1} 50%{opacity:.35} }
    .ditz-close {
      background:none; border:none; color:#a8b2d1; cursor:pointer;
      font-size:1rem; padding:.3rem; border-radius:8px;
      transition: color .2s, background .2s;
    }
    .ditz-close:hover { color:#00f5ff; background:rgba(0,245,255,.08); }

    /* ── MESSAGES ── */
    .ditz-messages {
      flex:1; overflow-y:auto; padding:.9rem 1rem;
      display:flex; flex-direction:column; gap:.7rem;
      scroll-behavior:smooth;
    }
    .ditz-messages::-webkit-scrollbar { width:4px; }
    .ditz-messages::-webkit-scrollbar-thumb { background:rgba(0,245,255,.2); border-radius:99px; }

    .ditz-msg { display:flex; gap:.5rem; align-items:flex-end; max-width:100%; }
    .ditz-msg.bot { justify-content:flex-start; }
    .ditz-msg.user { justify-content:flex-end; }

    .ditz-bubble {
      padding: .6rem .9rem; border-radius:16px;
      font-size:.82rem; line-height:1.55; max-width:82%;
      word-break: break-word;
    }
    .ditz-msg.bot .ditz-bubble {
      background: rgba(0,245,255,.07);
      border: 1px solid rgba(0,245,255,.15);
      color: #e8eaf0; border-bottom-left-radius:4px;
    }
    .ditz-msg.user .ditz-bubble {
      background: linear-gradient(135deg,rgba(0,245,255,.18),rgba(255,0,229,.14));
      border: 1px solid rgba(0,245,255,.2);
      color: #fff; border-bottom-right-radius:4px;
    }
    .ditz-bot-icon {
      width:26px; height:26px; border-radius:50%; flex-shrink:0;
      background: linear-gradient(135deg,#00f5ff,#ff00e5);
      display:flex; align-items:center; justify-content:center;
      font-size:.65rem; color:#fff;
    }

    /* Typing indicator */
    .ditz-typing { display:flex; gap:4px; align-items:center; padding:.5rem .7rem; }
    .ditz-typing span {
      width:7px; height:7px; border-radius:50%;
      background:rgba(0,245,255,.5); display:inline-block;
      animation: typingDot .9s infinite;
    }
    .ditz-typing span:nth-child(2) { animation-delay:.15s; }
    .ditz-typing span:nth-child(3) { animation-delay:.3s; }
    @keyframes typingDot { 0%,60%,100%{transform:translateY(0)} 30%{transform:translateY(-6px)} }

    /* ── INPUT ── */
    .ditz-input-wrap {
      display:flex; gap:.5rem; padding:.75rem 1rem;
      border-top:1px solid rgba(0,245,255,.08); flex-shrink:0;
      background:rgba(0,0,0,.2);
    }
    #ditz-input {
      flex:1; background:rgba(255,255,255,.05);
      border:1px solid rgba(0,245,255,.15); border-radius:99px;
      padding:.5rem .9rem; color:#e8eaf0; font-size:.82rem;
      font-family:'Poppins',sans-serif; outline:none;
      transition:border-color .2s;
    }
    #ditz-input:focus { border-color:rgba(0,245,255,.4); }
    #ditz-input::placeholder { color:rgba(168,178,209,.5); }
    #ditz-send {
      width:36px; height:36px; border-radius:50%; flex-shrink:0;
      background:linear-gradient(135deg,#00f5ff,#ff00e5);
      border:none; cursor:pointer; color:#fff; font-size:.85rem;
      display:flex; align-items:center; justify-content:center;
      transition:all .2s;
    }
    #ditz-send:hover { transform:scale(1.1); box-shadow:0 4px 14px rgba(0,245,255,.35); }
  `;
  document.head.appendChild(style);

  /* ── REFERENCES ───────────────────────────────────────────── */
  const messagesEl = document.getElementById('ditz-messages');
  const inputEl    = document.getElementById('ditz-input');
  const sendBtn    = document.getElementById('ditz-send');
  const closeBtn   = document.getElementById('ditz-close');
  let isOpen = false;
  let isBotTyping = false;

  /* ── ADD MESSAGE ──────────────────────────────────────────── */
  function addMessage(text, role) {
    const wrap = document.createElement('div');
    wrap.className = `ditz-msg ${role}`;
    if (role === 'bot') {
      wrap.innerHTML = `
        <div class="ditz-bot-icon"><i class="fa-solid fa-robot"></i></div>
        <div class="ditz-bubble">${renderText(text)}</div>
      `;
    } else {
      wrap.innerHTML = `<div class="ditz-bubble">${renderText(text)}</div>`;
    }
    messagesEl.appendChild(wrap);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function showTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'ditz-msg bot';
    wrap.id = 'ditz-typing-indicator';
    wrap.innerHTML = `
      <div class="ditz-bot-icon"><i class="fa-solid fa-robot"></i></div>
      <div class="ditz-bubble"><div class="ditz-typing"><span></span><span></span><span></span></div></div>
    `;
    messagesEl.appendChild(wrap);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function removeTyping() {
    const el = document.getElementById('ditz-typing-indicator');
    if (el) el.remove();
  }

  /* ── SEND FLOW ────────────────────────────────────────────── */
  function handleSend() {
    const text = inputEl.value.trim();
    if (!text || isBotTyping) return;
    inputEl.value = '';
    addMessage(text, 'user');
    isBotTyping = true;
    showTyping();
    // Simulate thinking delay (600–1200ms)
    const delay = 600 + Math.random() * 600;
    setTimeout(() => {
      removeTyping();
      const reply = processMessage(text);
      addMessage(reply, 'bot');
      isBotTyping = false;
    }, delay);
  }

  sendBtn.addEventListener('click', handleSend);
  inputEl.addEventListener('keydown', e => { if (e.key === 'Enter') handleSend(); });

  /* ── TOGGLE CHAT ──────────────────────────────────────────── */
  function openChat() {
    isOpen = true;
    chatWin.classList.add('open');
    fabBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    inputEl.focus();
    // Welcome message on first open
    if (messagesEl.children.length === 0) {
      setTimeout(() => {
        showTyping();
        setTimeout(() => {
          removeTyping();
          const l = getLang();
          addMessage(
            l === 'id'
              ? `Halo! 👋 Saya **Ditz AI**, asisten virtual Bagas Aditya.\nSilakan tanyakan apa saja tentang profil, pengalaman kerja, skill, sertifikat, atau project-nya!`
              : `Hello! 👋 I'm **Ditz AI**, Bagas Aditya's virtual assistant.\nFeel free to ask anything about his profile, work experience, skills, certificates, or projects!`,
            'bot'
          );
        }, 900);
      }, 200);
    }
  }

  function closeChat() {
    isOpen = false;
    chatWin.classList.remove('open');
    fabBtn.innerHTML = '<i class="fa-solid fa-robot"></i>';
  }

  fabBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    isOpen ? closeChat() : openChat();
  });
  closeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    closeChat();
  });

  // Close when clicking outside chat window
  document.addEventListener('click', function(e) {
    if (isOpen && !chatWin.contains(e.target) && !fabBtn.contains(e.target)) {
      closeChat();
    }
  });

  // Prevent clicks inside chat from closing it
  chatWin.addEventListener('click', (e) => e.stopPropagation());

  // Close when clicking outside chat window
  document.addEventListener('click', function(e) {
    if (isOpen && !chatWin.contains(e.target) && e.target !== fabBtn && !fabBtn.contains(e.target)) {
      closeChat();
    }
  });

  /* ── SCROLL SHOW/HIDE (sync dengan #btt) ─────────────────── */
  // Override bttToggle di script.js agar keduanya sync
  const originalBttToggle = window.bttToggle;
  function syncFabWithScroll() {
    const show = window.scrollY > 300;
    const bttBtn = document.getElementById('btt');
    if (bttBtn) bttBtn.classList.toggle('show', show);
    fabBtn.classList.toggle('show', show);
  }

  // Ganti event listener scroll navbar agar juga panggil syncFabWithScroll
  window.addEventListener('scroll', syncFabWithScroll);

  // Trigger sekali saat load
  document.addEventListener('DOMContentLoaded', syncFabWithScroll);

  /* ── LANG CHANGE: update placeholder & status ─────────────── */
  const _origApplyLang = window.applyLang;
  if (typeof window.applyLang === 'function') {
    // Patch applyLang to also update chatbot UI
    const _orig = window.applyLang;
    window.applyLang = function(l) {
      _orig(l);
      updateChatbotLang(l);
    };
  }
  // Also observe body class change as fallback
  new MutationObserver(() => updateChatbotLang(getLang()))
    .observe(document.body, { attributes: true, attributeFilter: ['class'] });

  function updateChatbotLang(l) {
    const statusEl = document.getElementById('ditz-status-txt');
    if (statusEl) statusEl.textContent = l === 'id' ? 'Online' : 'Online';
    if (inputEl) inputEl.placeholder = l === 'id' ? 'Tanya sesuatu...' : 'Ask something...';
  }

  // Set placeholder awal
  document.addEventListener('DOMContentLoaded', () => {
    updateChatbotLang(getLang());
    syncFabWithScroll();
  });

})();