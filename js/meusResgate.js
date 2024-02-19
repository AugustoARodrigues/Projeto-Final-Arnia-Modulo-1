
const mostrarDados = () => {
    window.location.href = `../html/meuDados.html`
  }
  const mostrarResgates = () => {
    window.location.href = `../html/meusResgate.html`
  }
  const mostrarJoias = () => {
    window.location.href = `../html/minhasJoias.html`
  }
  const sair = () => {
    alert("Você saiu da aplicação.")
    window.location.href = '../index.html' 
  }


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
                <p class="quantidadeJoias">
                    ${produto.joias}
                    joias</p>
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



// ---------------------------------------------------------------------------------


const gerarProduto = async()=>{
    let dados = await fetch(`http://localhost:3000/identidade`)
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