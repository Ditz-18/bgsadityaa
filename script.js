// Loading Screen with Progress
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  const progressBar = document.querySelector(".loader-progress-bar");
  const percentage = document.querySelector(".loader-percentage");

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;

    progressBar.style.width = progress + "%";
    percentage.textContent = Math.floor(progress) + "%";

    if (progress >= 100) {
      clearInterval(interval);
      setTimeout(() => {
        loader.classList.add("fade-out");
      }, 300);
    }
  }, 100);
});

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navOverlay = document.getElementById("navOverlay");

// Toggle menu when clicking hamburger
menuToggle.addEventListener("click", (e) => {
  e.stopPropagation();
  toggleMenu();
});

// Close menu when clicking overlay
navOverlay.addEventListener("click", () => {
  closeMenu();
});

// Close menu when clicking on link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});

// Close menu when clicking outside (anywhere on document)
document.addEventListener("click", (e) => {
  const isClickInsideMenu = navLinks.contains(e.target);
  const isClickOnToggle = menuToggle.contains(e.target);

  if (
    !isClickInsideMenu &&
    !isClickOnToggle &&
    navLinks.classList.contains("active")
  ) {
    closeMenu();
  }
});

// Prevent closing when clicking inside the menu
navLinks.addEventListener("click", (e) => {
  e.stopPropagation();
});

function toggleMenu() {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
  navOverlay.classList.toggle("active");

  // Prevent body scroll when menu is open
  if (navLinks.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function closeMenu() {
  menuToggle.classList.remove("active");
  navLinks.classList.remove("active");
  navOverlay.classList.remove("active");
  document.body.style.overflow = "";
}

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll Animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Parallax Effect for Hero
let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrolled = window.pageYOffset;
      const hero = document.querySelector(".hero-content");
      if (hero && window.innerWidth > 968) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
      }
      ticking = false;
    });
    ticking = true;
  }
});

// ============================================
// CERTIFICATES SECTION
// ============================================

// Certificate Filter Functionality
const filterButtons = document.querySelectorAll(".filter-btn");
const certificateCards = document.querySelectorAll(".certificate-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Get filter value
    const filterValue = button.getAttribute("data-filter");

    // Filter certificates
    certificateCards.forEach((card) => {
      const category = card.getAttribute("data-category");

      if (filterValue === "all") {
        card.classList.remove("hide");
        setTimeout(() => {
          card.style.display = "block";
        }, 10);
      } else if (category === filterValue) {
        card.classList.remove("hide");
        setTimeout(() => {
          card.style.display = "block";
        }, 10);
      } else {
        card.classList.add("hide");
        setTimeout(() => {
          card.style.display = "none";
        }, 300);
      }
    });
  });
});

// Certificate Modal Functionality
const certModal = document.getElementById("certModal");

// Open Certificate Modal - Ambil data langsung dari HTML
function openCertModal(button) {
  // Get certificate card parent
  const card = button.closest(".certificate-card");

  // Get data from card
  const image = card.querySelector(".certificate-image img").src;
  const title = card.querySelector(".certificate-content h3").textContent;
  const issuer = card.querySelector(".certificate-issuer").textContent.trim();
  const date = card.querySelector(".certificate-date").textContent.trim();
  const verifyLink = card.querySelector(".verify-btn").href;
  const downloadLink = card.querySelector(".download-btn").href;

  // Set modal content
  document.getElementById("modalImage").src = image;
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalIssuer").innerHTML = issuer;
  document.getElementById("modalDate").innerHTML = date;
  document.getElementById("modalVerify").href = verifyLink;
  document.getElementById("modalDownload").href = downloadLink;

  certModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close Certificate Modal
function closeCertModal() {
  certModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Close modal when pressing ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && certModal.classList.contains("active")) {
    closeCertModal();
  }
});

// Prevent modal content click from closing modal
const modalContent = document.querySelector(".modal-content");
if (modalContent) {
  modalContent.addEventListener("click", (e) => {
    e.stopPropagation();
  });
}

// ============================================
// CONTACT FORM
// ============================================

// Form Submission with Loading Effect
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    // Don't prevent default - let FormSubmit handle it
    // Just add loading overlay
    showFormLoading();
  });
}

// Show Form Loading Overlay
function showFormLoading() {
  const formContainer = document.querySelector(".contact-form");

  // Create loading overlay if not exists
  let loadingOverlay = document.getElementById("formLoadingOverlay");

  if (!loadingOverlay) {
    loadingOverlay = document.createElement("div");
    loadingOverlay.id = "formLoadingOverlay";
    loadingOverlay.className = "form-loading-overlay";
    loadingOverlay.innerHTML = `
            <div class="loading-content">
                <div class="loading-spinner"></div>
                <h3>Mengirim Pesan...</h3>
                <p>Mohon Tunggu</p>
            </div>
        `;
    formContainer.appendChild(loadingOverlay);
  }

  // Show overlay
  setTimeout(() => {
    loadingOverlay.classList.add("active");
  }, 10);
}

// Send via WhatsApp Function
function sendViaWhatsApp() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const subject = document.getElementById("subject")
    ? document.getElementById("subject").value
    : "";
  const message = document.getElementById("message").value;

  // Validate inputs
  if (!name || !email || !message) {
    alert("Mohon isi semua field yang wajib (Nama, Email, Pesan)");
    return;
  }

  // Create WhatsApp message
  const waMessage = `Halo Bagas! 👋

Nama: ${name}
Email: ${email}
${subject ? `Subjek: ${subject}\n` : ""}
Pesan:
${message}

---
Dikirim dari Portfolio Website`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(waMessage);

  // WhatsApp URL (with country code 62 for Indonesia)
  const waUrl = `https://wa.me/6281464435341?text=${encodedMessage}`;

  // Open WhatsApp
  window.open(waUrl, "_blank");
}

// Alternative: Show success message if redirected back
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get("success") === "true") {
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("formSuccess");

  if (form && successMsg) {
    form.style.display = "none";
    successMsg.classList.add("show");

    // Reset after 5 seconds
    setTimeout(() => {
      form.style.display = "block";
      successMsg.classList.remove("show");
      form.reset();
    }, 5000);
  }
}
