// =========================
// MOBILE MENU
// =========================
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

// =========================
// BACK TO TOP
// =========================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =========================
// SCROLL REVEAL EFFECT
// =========================

const revealElements = document.querySelectorAll(
    '.about-preview, .departments, .why-us, .card, .hero-text'
);

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;

    revealElements.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 80) {
            el.classList.add('reveal');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// =========================
// HERO FADE ON LOAD
// =========================
window.addEventListener('load', () => {
    const hero = document.querySelector('.hero-text');
    if (hero) {
        hero.style.opacity = 0;
        hero.style.transform = 'translateY(20px)';
        setTimeout(() => {
            hero.style.transition = 'all 0.8s ease';
            hero.style.opacity = 1;
            hero.style.transform = 'translateY(0)';
        }, 200);
    }
});
