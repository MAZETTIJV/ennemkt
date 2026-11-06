const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

// Configuração do Scroll Reveal
const revealElements = document.querySelectorAll(".reveal");
const revealOptions = {
  root: null,
  threshold: 0.1, 
  rootMargin: "0px 0px -50px 0px" 
};
const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
      observer.unobserve(entry.target); 
    }
  });
}, revealOptions);
revealElements.forEach((el) => {
  revealObserver.observe(el);
});

// Ocultar Botão WhatsApp Flutuante ao chegar na Seção de Contato
const contactSection = document.getElementById("contato");
const floatingWppBtn = document.getElementById("floatingWpp");

if (contactSection && floatingWppBtn) {
  const wppObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Se a seção de contato estiver visível na tela, esconde o botão flutuante
        floatingWppBtn.classList.add("hidden");
      } else {
        // Quando rolar para cima, o botão flutuante volta a aparecer
        floatingWppBtn.classList.remove("hidden");
      }
    });
  }, {
    root: null,
    threshold: 0.1 // Oculta o botão assim que 10% da seção de contato aparecer
  });
  
  wppObserver.observe(contactSection);
}
