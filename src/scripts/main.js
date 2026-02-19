// Seleciona os elementos pelas classes
const galleryBtn = document.querySelector('.gallery__button');
const galleryImages = document.querySelector('.gallery__content');

    galleryBtn.addEventListener('click', () => {
        const isOpening = galleryImages.classList.contains('gallery__content--hidden');

  // Alterna a visibilidade
    galleryImages.classList.toggle('gallery__content--hidden');

  // Se estiver abrindo, faz a tela descer suavemente
    if (isOpening) {
    setTimeout(() => {
        galleryImages.scrollIntoView({ 
        behavior: 'smooth', // Rolagem macia, não um pulo seco
        block: 'start'      // Alinha o topo da div com o topo da tela
    });
    }, 200); // CSS renderiza a mudança
    }

    galleryBtn.textContent = isOpening ? 'Esconder Galeria' : 'Mostrar Galeria';
});