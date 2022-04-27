const produtos = [
    {
        nome: 'cogumel',
        preco: 12.0,
        descricao: 'muito bom',
        fabricacao: 'made in br'
    },
    {
        nome: 'ervinha',
        preco: 10.0,
        descricao: 'naturale',
        fabricacao: 'deus'
    },
    {
        nome: 'cha',
        preco: 1.0,
        descricao: 'nao natural',
        fabricacao: 'eu que fiz'
    },
]

function produto(indice){
    console.log(produtos[indice])
    window.location = 'product.html?batata=' + indice
}

let url = new URL(window.location.href);
let searchParams = new URLSearchParams(url.search);
console.log(searchParams.get('batata'));
console.log(produtos[+searchParams.get('batata')])
let conteudo = document.getElementById('nome_produto')
conteudo.innerHTML = produtos[+searchParams.get('batata')].nome

//carregar na pagina de produtop todos os parametros dos objetos e explicar o codigo[o porquê]. 
//colocar comentarios em cada linha para explicar o que cada codigo faz