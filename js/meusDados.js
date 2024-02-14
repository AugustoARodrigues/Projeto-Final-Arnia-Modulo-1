
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


// ------------------------------------------------------------




let formulario = document.getElementById('formulario')

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

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  // const nomeUsuario = formulario.elements['nomeUsuario'].value;
  // const emailUsuario = formulario.elements['emailUsuario'].value;
  // const fotoUsuario = formulario.elements['fotoUsuiario'].value;


  // const objetoUsuario = {
  //     fotoUsuario, 
  //     emailUsuario,
  //     nomeUsuario
  // };
  // console.log('Nome:', nomeUsuario);
  // console.log('Email:', emailUsuario);
  // console.log('Foto:', fotoUsuario);

  // await cadastrarUsuario(objetoUsuario)


  // window.location = '../index.html'
  console.log("oi")
});

// -----------------------------------------------------------------------


// const resgatarProduto = async (id) => {
//   const produto = await gerarProduto(id)
//   const response = await fetch(`http://localhost:3000/identidade`, {
//       method: 'POST',
//       headers: {
//           'Accept': 'application/json, text/plain, */*',
//           'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ 
//         fotoUsuario, 
//         emailUsuario,
//         nomeUsuario
//   })
//   })

//   const result = await response.json()
//   console.log(result)

//   window.location.href = `../html/confirmadoProduto.html`
//   // window.location.href = `../html/meusResgate.html?id=${id}`

// };

// const handleResgateClick = async (e, id) => {
//   e.preventDefault()

//   const produto = await gerarProduto(id)
//   carregarDadosProduto(produto)

//   await resgatarProduto(id)
// }

// document.addEventListener('DOMContentLoaded', async () => {
//   const parametros = window.location.search
//   const objetoProduto = new URLSearchParams(parametros)
//   const id = objetoProduto.get('id')

//   const produto = await gerarProduto(id)
//   carregarDadosProduto(produto)

//   const botaoResgate = document.querySelector('.resgatarProduto')
//   botaoResgate.addEventListener('click', (e) => handleResgateClick(e, id))
// })
