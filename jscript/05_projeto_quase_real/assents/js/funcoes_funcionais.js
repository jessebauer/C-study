const vetorProduto =
    [
        {
            "produto": "Produto 01",
            "preco": 100,
            "descricao": "Loren ipsum!",
            "emEstoque": false,
            "img": "assents/imgs/img0002.jpg"
        },
        {
            "produto": "Produto 02",
            "preco": 3.65,
            "descricao": "Loren ipsum! Not ipusum",
            "emEstoque": true,
            "img": "assents/imgs/img0001.jpg"
        },
        {
            "produto": "Produto 03",
            "preco": 0.90,
            "descricao": "Loren ipsum! Not ipusum! Outro ispum",
            "emEstoque": true,
            "img": "assents/imgs/img0003.jpg"
        },
        {
            "produto": "Produto 04",
            "preco": 100,
            "descricao": "Loren ipsum!",
            "emEstoque": false,
            "img": "assents/imgs/img0002.jpg"
        },
        {
            "produto": "Produto 05",
            "preco": 3.65,
            "descricao": "Loren ipsum! Not ipusum",
            "emEstoque": true,
            "img": "assents/imgs/img0001.jpg"
        },
        {
            "produto": "Produto 06",
            "preco": 0.90,
            "descricao": "Loren ipsum! Not ipusum! Outro ispum",
            "emEstoque": false,
            "img": "assents/imgs/img0003.jpg"
        }
    ];
/**
 * Filter,map, reduce
 */
const filtroMaior10 = (elemento) => {
    return elemento.preco < 10;
};
const emEstoque = (elemento => {
    return elemento.emEstoque == true;
})
const produtosMaior10 = vetorProduto.filter(filtroMaior10);
const produtosEmEstoque = vetorProduto.filter(emEstoque);

console.log('Filter: ', produtosEmEstoque);

const converterDolar = (elemento) => {

    vetorProduto.preco = (elemento.preco / 5.43).toFixed(2);
    return vetorProduto;
}
const produtosEmDolar = [vetorProduto].map(converterDolar);

console.log('Map: ', produtosEmDolar);

const retornaNomeProdutos = (element) => {
    return element.produto + " --- " + element.preco;
};
const nomesProdutos = vetorProduto.map(retornaNomeProdutos);

console.log('Nomes', nomesProdutos);

/* reduce - fazer um calculo com todos os elementos retornando um unico valor*/

const somaPrecos = (totalizador, elemento) => {
    return totalizador + elemento.preco;
}

const mediaPreco = (vetorProduto.reduce(somaPrecos, 0)).toFixed(2);

console.log('reduce soma: ', mediaPreco);
console.log('reduce media: ', mediaPreco / vetorProduto.length);

const divListaProdutos = document.getElementById('listaProdutos');

/**
 * for(valor of vetor)
 * for(indice in vetor)
 */
const exibirProdutos = (vetor) => {
    divListaProdutos.innerText = '';
    for (let elemento of vetor) {
        const divProduto = `
    <div class="produto">
    <h1>${elemento.produto}</h1>
    <p>${elemento.descricao}</p>
    <h5>R$ ${elemento.preco}</h5>
    </div>
    `;
        divListaProdutos.innerHTML += divProduto;
    }
}

exibirProdutos(vetorProduto);

let estadoFiltroEstoque = false;


const btnFiltraApenasEstoque = document.getElementById('filtro01');

btnFiltraApenasEstoque.onclick = () => {
    estadoFiltroEstoque = !estadoFiltroEstoque;
    if (estadoFiltroEstoque) {
        const vetorFiltrado = vetorProduto.filter(emEstoque);
        exibirProdutos(vetorFiltrado);
        btnFiltraApenasEstoque.innerHTML = "Remover Filtro Apenas em Estoque";
        mediaValor = document.getElementById('media')
        mediaValor.innerHTML = vetorFiltrado.reduce(total, elemento.preco, 0);
    } else {
        exibirProdutos(vetorProduto);
        btnFiltraApenasEstoque.innerHTML = "Filtrar Apenas em Estoque"
    }
}

// Mostrar a média dos preços dos produtos exibidos em tela
// Botão para exibir o preço em dolar

// const mediaPreco = (vetorProduto.reduce(somaPrecos, 0)).toFixed(2);
