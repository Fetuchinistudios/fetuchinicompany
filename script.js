window.onload = function() {
    const modal = document.getElementById('custom-modal');
    const closeButton = document.querySelector('.close-button');
    const modalButton = document.querySelector('.modal-btn');

    // Mostrar el modal al cargar la página
    modal.style.display = 'block';

    // Cerrar el modal cuando el usuario hace clic en la "X"
    closeButton.onclick = function() {
        modal.style.display = 'none';
    };

    // Cerrar el modal cuando el usuario hace clic en el botón "Entendido"
    modalButton.onclick = function() {
        modal.style.display = 'none';
    };

    // Cerrar el modal si el usuario hace clic fuera del contenido del modal
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
};

// Efecto de desvanecimiento para la barra de navegación
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
