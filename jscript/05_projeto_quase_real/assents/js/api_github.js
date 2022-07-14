function renderizaFoto(foto) {
    const imgFoto = document.getElementById('foto');
    imgFoto.src = `${foto}`;
}


fetch("https://api.github.com/users/jessebauer")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        renderizaFoto(data.avatar_url);
    })
    .catch(error => { // para status de erro
        console.error('algo deu errado na requisição', error);
    }
    ).finally(() => {
        console.warn('sempre cai aqui');
    });