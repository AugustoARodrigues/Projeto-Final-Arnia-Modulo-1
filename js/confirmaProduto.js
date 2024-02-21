
const voltarHome = () => {
    window.location.href = `../html/home.html`
}

// primeira parte

const gerarProduto = async(id)=>{
    let dados = await fetch(`https://projeto-arnia-final.onrender.com/produtos/${id}`)
    const produto = await dados.json() 
      // console.log(produto)
    return produto
}

const carregarDadosProduto = (produto)=>{
    document.querySelector('#imagemProduto').src = `./${produto.imagem}`
    document.querySelector('#titulo').innerText = produto.title
    document.querySelector('.qntDiamantesCarg').innerText = produto.joias
}

const carregarProduto = async ()=>{
    const parametros = window.location.search

    const objetoProduto = new  URLSearchParams(parametros)
    const  id = objetoProduto.get('id')

    const produto = await gerarProduto(id)

    carregarDadosProduto(produto)
}

carregarProduto()