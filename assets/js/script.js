// ====================== NAVBAR TOGGLE ======================
const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav_ul');

if (menu && navMenu) {
  menu.addEventListener('click', () => {
    navMenu.classList.toggle('showmenu');
  });

  // Close menu on link click (for mobile)
  document.querySelectorAll('.nav_ul a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 992) {
        navMenu.classList.remove('showmenu');
      }
    });
  });
}

// ====================== SMOOTH SCROLL ======================
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ====================== SKILL BARS ANIMATION ON SCROLL ======================
const skillBars = document.querySelectorAll('.bar-fill');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.dataset.width;
      entry.target.style.width = width;
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  bar.dataset.width = bar.style.width; // Save original width
  bar.style.width = "0%"; // Reset to zero
  observer.observe(bar);
});

// ====================== EMAILJS CONTACT FORM ======================
(function() {
  emailjs.init("_2eN9euiyIvEwEE43"); // ✅ Replace with your EmailJS Public Key
})();

const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const button = contactForm.querySelector("button");
    button.textContent = "Sending...";
    button.disabled = true;

    emailjs.sendForm("service_agexqy1", "template_1234e9h", this)
    .then(function() {
      button.textContent = "Message Sent!";
      setTimeout(() => {
        button.textContent = "Send";
        button.disabled = false;
      }, 2000);
      contactForm.reset();
    }, function(error) {
      alert("Failed to send message. Please try again.");
      console.error("EmailJS Error:", error);
      button.textContent = "Send";
      button.disabled = false;
    });
  });
}
