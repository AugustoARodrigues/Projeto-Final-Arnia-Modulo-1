// -------------aparecer o alerta apos carregar a pagina------------------------
// const visAlertaHome=()=>{
//     window.alert('Complete seu cadastro no "Meu Perfil') 
// }
// window.addEventListener('load', visAlertaHome)

// --------------------------------------------------------------------------


const irProduto = (id) => {
    window.location.href = `../html/produto.html?id=${id}`
}


const aquiPost= async ()=>{
    const buscarApiHttp = await fetch('http://localhost:3000/produtos')
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

            <img src="${produto.imagem}" alt="${produto.title}" srcset="" />
            <div class="detalheProduto">
            <h3>${produto.title}</h3>

            <p class="quantidadeJoias">2 joias</p>

            <button class="botaoPResgate" onclick="irProduto('${produto.id}')">Resgatar</button>

        </div>  

        `        
    })
}

const carregarDadosProduto = async ()=>{
    const postagens = await aquiPost()
    mostrarProdutos(postagens) 
}
carregarDadosProduto()


// ---------------------busca--------------------------

// const buscarProduto=()=>{
//         const termoBusca = document.getElementById('pesquisa').value.toLowerCase()
//         const produtos = aquiPost()

//         produtos.then((data)=>{
//             const produtosFiltrados =data.filter((produto)=>{
//                 return produto.title
//             })
//             mostrarProdutos(produtosFiltrados)
//         })
// }


const buscarProduto = () => {
    const termoBusca = document.getElementById('pesquisa').value.toLowerCase();
    const produtos = aquiPost();

    produtos.then((data) => {
        const produtoEncontrado = data.find((produto) => {
            return produto.title.toLowerCase() === termoBusca;
        });

        if (produtoEncontrado) {
            irProduto(produtoEncontrado.id);
        } else {
            // Display a message or handle the case where the product is not found
            console.log("Produto não encontrado");
        }
    });
};

