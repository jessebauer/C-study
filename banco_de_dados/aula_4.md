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

Produto (#IdProduto, peso, custo, preço, peso)
Prod_Peça(#Produto_Peca,&IdProduto,&IdPeca,qntd)
Peca (#IdPeca, material,custo, preço, peso)


<!-- "#" chave primaria campo que nao depete - tabela, arquivo, entidade, tabela  (4 campos) 
 "&" chave estrangeira que estabelece a comunicação entre tabelas 
 
 N -- N 
 Quebrar relacionamento criando tabela associativa e aplicar primeira regra

 Para achar uma tabela procurar por substantivos 'fortes', que da para guardar informação
 Relacionamentos -> verbos (indica as ligações)
 -->




departamento 1 --- N curso
departamento(!)
curso(!cod, denominacao, sigla)


aluno N --- 1 curso
aluno (!matricula, nome, endereco, fone, filiacao, dt_nasc)
curso(!cod, denominacao, sigla)



professor N -- 1  disciplina  


professor N -- 1 departamento



professor N --- N formacao[cursos]
professor(!)
professor_curso (!,&,&)
cursos


professor N --- N inst_ensino (!,)
professor(!)
prof_inst_ens(!,&,&)
inst_ensino(!)



 
