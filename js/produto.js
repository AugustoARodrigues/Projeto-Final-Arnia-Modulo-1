
const gerarProduto = async (id) => {
    const response = await fetch(`http://localhost:3000/produtos/${id}`)
    const produto = await response.json()
    return produto
};

const carregarDadosProduto = (produto) => {
    document.querySelector('#imagemProduto').src = `./${produto.imagem}`
    document.querySelector('#titulo').innerText = produto.title
    document.querySelector('#descricao1').innerText = produto.descricao
    document.querySelector('#descricao2').innerText = produto.descricao2
}

const resgatarProduto = async (id) => {
    const produto = await gerarProduto(id)
    const response = await fetch(`http://localhost:3000/resgate`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            productId: id, 
            title: produto.title,
            imagem: produto.imagem
    })
    })

    const result = await response.json()
    console.log(result)

    window.location.href = `../html/confirmadoProduto.html?id=${id}`
    // window.location.href = `../html/meusResgate.html?id=${id}`

};

const handleResgateClick = async (e, id) => {
    e.preventDefault()

    const produto = await gerarProduto(id)
    carregarDadosProduto(produto)

    await resgatarProduto(id)
}

document.addEventListener('DOMContentLoaded', async () => {
    const parametros = window.location.search
    const objetoProduto = new URLSearchParams(parametros)
    const id = objetoProduto.get('id')

    const produto = await gerarProduto(id)
    carregarDadosProduto(produto)

    const botaoResgate = document.querySelector('.resgatarProduto')
    botaoResgate.addEventListener('click', (e) => handleResgateClick(e, id))
})
