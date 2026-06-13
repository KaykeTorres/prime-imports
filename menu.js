const btnHamburguer = document.getElementById('btn-hamburguer');
const menuMobile = document.getElementById('menu-mobile');

btnHamburguer.addEventListener('click', function() {
  menuMobile.classList.toggle('ativo');
});