
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

    atualizartotal()
};

// funçao de soma o total de preço dos produtos adicionados no carrinho

const valor_total = document.getElementById('valor-total');

let totalformatado = 0

function atualizartotal(){
    let total = 0;
    const produtosdoCarrinho = list_produtos.querySelectorAll('.caixa')

    produtosdoCarrinho.forEach(function(produto){

    const preco = produto.querySelector('.preco').dataset.preco

    const numero = parseFloat(preco.replace(",","."));
        
        total = total + numero;
    })

    totalformatado = total.toFixed(2).replace(".",",");

    valor_total.innerHTML = `Total: R$ ${totalformatado}`
};

    const pagar_pedido = document.querySelector('#pagar-pedido')
    const btn_Pedido = document.querySelector('#btn-fazer-pedido')
    const btn_confirmar = document.querySelector('#btn-confirmar')
    const btn_exitConfirmar = document.querySelector('#exit-confirmar')
    

       
    btn_Pedido.addEventListener('click', pagarPedido)
    btn_exitConfirmar.addEventListener('click', exitconfirmar)
    btn_confirmar.addEventListener('click', botao_confirmar)
    
    
    function pagarPedido(){
       if(totalformatado == ''){

          const msg_erro = document.createElement('div')
          msg_erro.classList.add('msg-erro')
          msg_erro.innerHTML = `Nenhum produto encontrado`

          cart_lateral.appendChild(msg_erro)

          setTimeout(function(){
            msg_erro.style.display = 'none'
          },2000);
       }
       else{
        pagar_pedido.style.display = 'block'
       const elemento_total = document.querySelector('#elemento-total')
       elemento_total.innerHTML = `Total: R$ ${totalformatado}`
       }
       
    };

    function botao_confirmar(){
        const msg_confirm = document.createElement('div')
        msg_confirm.classList.add('msg-confirm')
        msg_confirm.innerHTML = `Confirmado seu pedido`

        cart_lateral.appendChild(msg_confirm)

        setTimeout(function(){
            msg_confirm.style.display = 'none'
            exitconfirmar()
            cart_lateral.classList.remove('aberto')
        },3000)
        
    };

    function exitconfirmar(){
        pagar_pedido.style.display = 'none'
    };






    

