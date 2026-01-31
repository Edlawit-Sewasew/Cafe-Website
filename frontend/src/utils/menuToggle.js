export function initMenuToggle() {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.querySelector('.navbar');

  if (menuToggle && navbar) {
    menuToggle.addEventListener('click', function () {
      navbar.classList.toggle('nav-open');
    });
  }
}
