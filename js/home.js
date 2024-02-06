// -------------aparecer o alerta apos carregar a pagina------------------------
const visAlertaHome=()=>{
    window.alert('Complete seu cadastro no "Meu Perfil') 
}
window.addEventListener('load', visAlertaHome)

// --------------------------------------------------------------------------



const aquiPost= async ()=>{
    const buscarApiHttp = await fetch('https://projeto-arnia-final.onrender.com/produtos')
    const produdos = await buscarApiHttp.json()
    // console.log(buscarApiHttp)
    // console(produdos)
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

            <a href="../html/produto.html?id=${produto.id}">
            <button class="botaoPResgate">Resgatar</button></a>

        </div>  

        `        
    })
    // <button class="botaoPResgate" onclick="irProduto('${produto.id}')">Resgatar</button>

}
const carregarDadosProduto = async ()=>{
    const postagens = await aquiPost()
    mostrarProdutos(postagens) 
}
carregarDadosProduto()

