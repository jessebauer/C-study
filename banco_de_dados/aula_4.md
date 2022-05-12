## Relação N -- N



### Nota Fiscal - Produto

Nota_Fiscal (#idNota, data)
Itens_Nota(#NotaF_Produto,&idNota,&idProduto,qtde,valor_venda)
Produto (#idProduto, preco, peso,menor_preco,maior_preco)

--------------------

### Receita - Ingredientes

Receita (#idReceita, qntCaloria, nome)
Rec_Ind(#ReceitaIngrediente,&idReceita,&idIgrediente, qntd, modo_preparo)
Ingrediente (#idIgrediente, nome, preco)

--------------------

### Produto - Peça

Produto (#IdProduto, peso, custo)
Produto_Peca(#Produto_Peca,&IdProduto,&IdPeca)
Peca (#IdPeca, material,custo)

