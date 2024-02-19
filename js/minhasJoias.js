
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


// --------------------------------------------------------------------------------

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