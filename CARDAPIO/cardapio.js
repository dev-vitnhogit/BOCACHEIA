
// conteudo de conteneir lateral carrinho
const carrinho = document.getElementById('nav-carrinho');
const cart_lateral = document.getElementById('cart-lateral');
const categorias = document.getElementById('menu-categorias')
const btn_exit = document.getElementById('btn-exit')

// conteudo de adicionar no carrinho
const btn_adicionar = document.querySelectorAll('.btn-carrinho')
const list_produtos = document.getElementById('list-produtos')

const caixa = document.querySelector('.caixa')

// evento de click para o counteudo do carrinho
carrinho.addEventListener('click', ativarcarrinho);
btn_exit.addEventListener('click', exitlateral);

// funcoes do carrinho
function ativarcarrinho(){
    cart_lateral.classList.add('aberto')
    categorias.style.display = 'none'
};

function exitlateral(){
    cart_lateral.classList.remove('aberto')
    categorias.style.display = 'block'

};

// funçao para os botoes de adicionar no carrinho
btn_adicionar.forEach(function(botoes){
    botoes.addEventListener('click', addprodutos)
})

// funçao que clona o produto e coloca no carrinho
function addprodutos(event){
    const botao_clicado = event.target;
    const produto = botao_clicado.closest('.caixa')
    
    const produto_clonado = produto.cloneNode(true)

    produto_clonado.classList.add('novo-estilo');

    list_produtos.appendChild(produto_clonado)
}






    

