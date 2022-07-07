let elemento_usuario_logado = document.getElementById("usuario-logado");

const nome_usuario_logado = localStorage.getItem("usuarioLogado");

const sobrenome_usuario_logado = localStorage.getItem("sobrenome");

elemento_usuario_logado.innerHTML = `Olá ${nome_usuario_logado.slice(0, 1).toUpperCase() + nome_usuario_logado.slice(1)} ${sobrenome_usuario_logado}, Seja muito bem vindo(a) `

const retornarLogin = () => {
    window.location.assign("../index.html");
    localStorage.clear();
    // localStorage.removeItem("usuarioLogado") apagar unidade
}

document.getElementById("usuario-logado").onclick = () => {
    window.location.assign("../index.html");
    localStorage.clear();
}
// } funciona sem onclick na tag