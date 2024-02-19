
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


// ---------------------ADD---------------------------------------

let formulario = document.getElementById('formularioCadastro')

const cadastrarUsuario = async (objetoUsuario) => { 
  await fetch('http://localhost:3000/identidade', {
      method: 'POST',
      headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(objetoUsuario)
  });
};

formulario.addEventListener("submit",async (e) => {
  e.preventDefault();

  const nomeUsuario = formulario.elements['nomeUsuario'].value;
  const emailUsuario = formulario.elements['emailUsuario'].value;

  document.querySelector('.nomeUsuario').innerText = nomeUsuario
  document.getElementById('fotoUsuario').src = fotoUsuario

  const objetoUsuario = {
      fotoUsuario, 
      emailUsuario,
      nomeUsuario
  };
  console.log('Nome:', nomeUsuario);
  console.log('Email:', emailUsuario);
  console.log('Foto:', fotoUsuario);

  await cadastrarUsuario(objetoUsuario)

  window.location = '../html/home.html'
});


// -------------------------------------------------------------------

const gerarProduto = async()=>{
  let dados = await fetch(`http://localhost:3000/identidade`)
  const ident = await dados.json() 
  return ident
}

const carregarDadosidentidade = (ident)=>{
  
  const nomeUsuario = ident[0].nomeUsuario
  const fotoUsuario = ident[0].fotoUsuario

  document.querySelector('.nomeUsuario').innerText = ident.nomeUsuario
  document.querySelector('.nomeUsuario').innerText = nomeUsuario
  document.getElementById('fotoUsuario').src = fotoUsuario
  carregarDadosProduto(ident)
}

const carregarIdent = async () => {
  const ident = await gerarProduto()
  carregarDadosidentidade(ident);
}
carregarIdent();