const menuToggleClose = document.querySelector('.menu-toggle-close');
const nav = document.querySelector('.navbar .menu');

menuToggleClose.addEventListener('click', function() {
  nav.classList.toggle('off');
});
