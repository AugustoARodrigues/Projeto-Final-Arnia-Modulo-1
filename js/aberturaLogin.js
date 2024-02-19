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

// ------------------logim para home-------------------------------

const botaoLogin = document.querySelector('#botaoLogin');

const saveEmailNoAPI = async (emailUsuario) => {
    await fetch('http://localhost:3000/identidade', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ emailUsuario })
    })
};

const alertaLoginhome = () => {
    const emailInput = document.querySelector('#emailUsuario').value
    const senhaInput = document.querySelector('#loginSenha').value

    if (emailInput === '' || senhaInput === '') {
        window.alert('Preencha todos os campos!')
    } else {
        saveEmailNoAPI(emailInput)
        window.location = 'html/home.html'
    }
}

botaoLogin.addEventListener('click', alertaLoginhome)

