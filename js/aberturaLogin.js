// ------------------index para login-------------------------------

const divVisualizar = () => {
    const aberturaLogo = document.querySelector("#aberturaLogo")
    const loginPrincipal = document.getElementById('loginPrincipal')

    if (aberturaLogo.classList.contains("escondido")) {
        aberturaLogo.classList.remove("escondido")
        loginPrincipal.classList.add("escondido")
    } else {
        aberturaLogo.classList.add("escondido")
        loginPrincipal.classList.remove("escondido")
    }
}
const botaoAbertura = document.getElementById('botaoAbertura')


botaoAbertura.addEventListener('click', divVisualizar)

// Adiciona um ouvinte de evento ao botão ser clicado e ser visualizado no momento


// ------------------logim para home-------------------------------


const botaoLogin = document.querySelector('#botaoLogin')

const alertaLoginhome =()=> {

const emailInput = document.querySelector('#loginEmail').value
const senhaInput = document.querySelector('#loginSenha').value

if (emailInput === '' || senhaInput === '') {
    window.alert('Preencha todos os campos!')
} else {
    window.location = 'html/home.html'
}
}
botaoLogin.addEventListener('click', alertaLoginhome)