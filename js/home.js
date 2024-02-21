
const irProduto = (id) => {
    window.location.href = `../html/produto.html?id=${id}`
}


const aquiPost= async ()=>{
    const buscarApiHttp = await fetch('https://projeto-arnia-final.onrender.com/produtos')
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

            <p class="quantidadeJoias">${produto.joias} joias</p>

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


// --------------------------------------------------------------------

const gerarProduto = async()=>{
    let dados = await fetch(`https://projeto-arnia-final.onrender.com/identidade`)
    const ident = await dados.json() 
    return ident
}

const carregarDadosidentidade = (ident)=>{
    document.querySelector('.nomeUsuario').innerText = ident.nomeUsuario
    const nomeUsuario = ident[0].nomeUsuario
    const fotoUsuario = ident[0].fotoUsuario
    document.querySelector('.nomeUsuario').innerText = nomeUsuario
    document.getElementById('fotoUsuario').src = fotoUsuario
    carregarDadosProduto(ident)
}

const carregarIdent = async () => {
    const ident = await gerarProduto()
    carregarDadosidentidade(ident);
}
carregarIdent();