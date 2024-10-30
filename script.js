function scrollLeft() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.scrollBy({
        left: -350, // Définit la distance de défilement vers la gauche
        behavior: 'smooth'
    });
}

function scrollRight() {
    const projectsGrid = document.querySelector('.projects-grid');
    projectsGrid.scrollBy({
        left: 350, // Définit la distance de défilement vers la droite
        behavior: 'smooth'
    });
}
