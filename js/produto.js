// const produtoDiv = document.querySelector('#inforProdutos')
// let id = null

// produtoDiv.addEventListener('click', async (e) =>{
//     e.preventDefault()   

//     const titulo = produtoDiv.elements['titulo'].value
//     const imagem = produtoDiv.elements['imagemProduto'].value
//     const texto1 = produtoDiv.elements['descricao1'].value
//     const texto2 = produtoDiv.elements['descricao2'].value

//     const objetoProduto ={
//         title: titulo,
//         imagem,
//         descricao: texto1,
//         descricao2: texto2,
//     }

//     await irProduto(id, objetoProduto)

//     window.location= '../index.html'
// })


const irProduto= (id)=>{
    window.location = `html/produto.html?id=${id}`
}

const gerarProduto = async(id)=>{
    let dados = await fetch(`https://projeto-arnia-final.onrender.com/produtos/${id}`)
    const produto = await dados.json() 
console.log(produto)
    return produto
}

const carregarDadosProduto = (produto)=>{
    // document.querySelector('#imagemProduto').value = produto.imagem
    document.querySelector('#imagemProduto').src = `./${produto.imagem}`
    document.querySelector('#titulo').innerText = produto.title;
    document.querySelector('#descricao1').innerHTML = produto.descricao
    // document.querySelector('#descricao1').value = produto.descricao
    document.querySelector('#descricao2').innerHTML = produto.descricao2
    // document.querySelector('').value = produto.joias
}

const carregarProduto = async ()=>{
    const parametros = window.location.search
    // console.log(parametros)

    const objetoProduto = new  URLSearchParams(parametros)
     id = objetoProduto.get('id')

    const produto = await gerarProduto(id)

    carregarDadosProduto(produto)
}

carregarProduto()