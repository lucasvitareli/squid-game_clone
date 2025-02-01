document.addEventListener('scroll', function() {
    const nav = document.querySelector('.container__nav');
    const hero = document.querySelector('.hero');
    const heroTop = hero.offsetTop; // Obtém a distância do topo da página até o topo da seção .hero
    const scrollPosition = window.scrollY;

    if (scrollPosition >= heroTop) {
        hideElements(nav);
    } else {
        showElements(nav);
    }

    // Ajuste no padding-top do nav
    if (scrollPosition >= heroTop) {
        nav.classList.add('reduce-padding'); // Adiciona a classe para remover o padding-top
    } else {
        nav.classList.remove('reduce-padding'); 
    }
    
});

function hideElements(nav) {
    nav.style.transition = 'all 0.5s ease'; 
    nav.style.display = 'flex';
    nav.style.justifyContent = 'center';
    nav.style.width = '100%';
    nav.style.position = 'fixed'; // Tornar o nav fixo no topo quando rolar para baixo
    nav.style.top = '0'; // Fixa o nav no topo
}

function showElements(nav) {
    nav.style.transition = 'all 0.5s ease';
    nav.style.position = 'relative'; 
    nav.style.top = 'auto'; // Remove a fixação do topo
    nav.style.backgroundColor = 'transparent'; 
    
}
