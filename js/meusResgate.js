// ----------------------------------------------------------------------------------


const aquiPost= async ()=>{
    const buscarApiHttp = await fetch(`http://localhost:3000/resgate`)
    const produdos = await buscarApiHttp.json()

    return  produdos
}

const mostrarProdutos=(produdos) =>{
    const produtoDiv = document.querySelector('#produtos')
    produtoDiv.innerHTML=''
    produdos.forEach(produto => {
        produtoDiv.innerHTML+=
        `
            <div class="produtoinfor" id="produtoinfor">
                <p class="data">22 de dezembro</p>
                <img id="imagemProduto"  src="${produto.imagem}" alt="${produto.title}" srcset="" />
            <div class="detalheProduto">
                <h3 id="titulo">${produto.title}</h3>
                <p class="quantidadeJoias">2 joias</p>
            </div>
            </div>
        </div>

        `        
    })
}

const carregarDadosProduto = async ()=>{
    const postagens = await aquiPost()
    mostrarProdutos(postagens) 
}
carregarDadosProduto()