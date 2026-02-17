// TOGGLE MENU MOBILE
function toggleMenu() {
    document.getElementById("nav").classList.toggle("active");
}

// BOTÃO VOLTAR AO TOPO
const backToTopButton = document.getElementById('backToTop');

// Mostrar o botão quando a página for rolada 300px ou mais
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// Rolar suavemente até o topo ao clicar
backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
