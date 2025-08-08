const menuHamburguer = document.getElementById('menu-hamburguer');
const menuNormal = document.getElementsByTagName('nav')[0];

menuHamburguer.addEventListener('click',ativarMenu);

function ativarMenu(){
    menuNormal.classList.toggle('ativo');
}
