// Navbar scroll effect
window.addEventListener("scroll", () => {
const navbar = document.getElementById("navbar")
if (window.scrollY > 50) {
    navbar.classList.add("scrolled")
} else {
    navbar.classList.remove("scrolled")
}
})

// Form submission handler
function handleFormSubmit(event) {
event.preventDefault()

const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
}

console.log("Formulário enviado:", formData)

// Simula envio bem-sucedido
alert("Mensagem enviada com sucesso! Entrarei em contato em breve.")

// Limpa o formulário
document.getElementById("contactForm").reset()

// Aqui você pode adicionar integração com serviços como:
// - Formspree (https://formspree.io/)
// - EmailJS (https://www.emailjs.com/)
// - Netlify Forms
// - getform.io
}

// Adiciona animação de fade-in aos elementos quando entram na viewport
const observerOptions = {
threshold: 0.1,
rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
    if (entry.isIntersecting) {
    entry.target.style.opacity = "1"
    entry.target.style.transform = "translateY(0)"
    }
})
}, observerOptions)

// Observa todos os cards e seções para animação
document.addEventListener("DOMContentLoaded", () => {
const animatedElements = document.querySelectorAll(".project-card, .soft-skill-card, .section-header")

animatedElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
})
})
