const carrinho = (document.getElementById('nav-carrinho'));
const cart_lateral = document.getElementById('cart-lateral');
const categorias = document.getElementById('menu-categorias')
const btn_exit = document.getElementById('btn-exit')

carrinho.addEventListener('click', ativarcarrinho);
btn_exit.addEventListener('click', exitlateral)

function ativarcarrinho(){
    cart_lateral.classList.add('aberto')
    categorias.style.display = 'none'
};

function exitlateral(){
    cart_lateral.classList.remove('aberto')
    categorias.style.display = 'block'

}



    

