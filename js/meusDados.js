function mostrarDados() {
    document.getElementById("content").innerHTML = "<h1>Meus Dados</h1><p>Aqui estão seus dados pessoais.</p>";
  }

  function mostrarResgates() {
    document.getElementById("content").innerHTML = "<h1>Meus Resgates</h1><p>Aqui estão seus registros de resgates.</p>";
  }

  function mostrarJoias() {
    document.getElementById("content").innerHTML = "<h1>Minhas Joias</h1><p>Aqui estão suas informações sobre joias.</p>";
  }

  function sair() {
    alert("Você saiu da aplicação.");
    // Aqui você pode redirecionar para a página de login, por exemplo.
  }