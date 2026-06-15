const btnHamburguer = document.getElementById('btn-hamburguer');
const btnX = document.getElementById('btn-x');
// Selecionamos o elemento 'nav' de dentro do header
const menuMobile = document.querySelector('header nav');

// Função para abrir o menu
btnHamburguer.addEventListener('click', function() {
    menuMobile.classList.add('ativo');      // Mostra a lista do menu
    btnHamburguer.classList.add('ativo');  // Esconde o hambúrguer
    btnX.classList.add('ativo');           // Mostra o X
});

// Função para fechar o menu (clicando no X)
btnX.addEventListener('click', function() {
    menuMobile.classList.remove('ativo');   // Esconde a lista do menu
    btnHamburguer.classList.remove('ativo');// Mostra o hambúrguer de volta
    btnX.classList.remove('ativo');        // Esconde o X
});