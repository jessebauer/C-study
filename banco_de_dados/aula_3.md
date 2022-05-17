## Tabelas


Médico(#CRM,nome,dt_nasc,telefone,email,foto,sexo)

Profissão(#idProfissao,nome,descrição,salário,carga_horaria)

Comida(#codComidanome,preço,dt_validade,caloria,qnt_sodio,gluten,

Hobby(#idHobby,nome,descrição,finalidade,frequencia,qtd_calorias)

Namorado(a)(#matNamorado,nome,descrição,nota,sexo,altura,dt_nascimento,dt_inicio,dt_fim,investimento,fone)

Paciente(#idPaciente,Num_SUS,nome,dt_nascimento,CPF,RG,telefone,alergia?,descrição,end)


## Tipos de relacionamentos

Médico N --- N Pacientes

Aluno N --- N Disciplina

Emprego N --- 1 Cargo

Empregado N --- N Cargo

Animal 1  --- 1 Raça

Nota Fiscal N --- 1 Cliente

Produto N --- N Nota Fiscal

Filme N --- N Gênero

Produto N --- 1 Tipo de Produto

Médico N --- N Especialidade

===================================================
## APLICANDO A 1ª REGRA DE RELACIONAMENTO

###• Chave Primária do Lado 1 deve SEMPRE estar no Lado N.

Nota Fiscal N -- 1 Cliente

Cliente (#CPF,nome,end,dt_nascimento,email,fone)         
Nota Fiscal (#Nr_nota,dt,valor_nt,tributos,&CPF)    

Estado 1 --- N Cidade 

Estado (#UF,Estado)
Cidade (#idCidade,nome, &UF_estado)


https://www.lucidchart.com/pages/ → lucidchart
Utilizar entidades relacionais

=================================
Ache o relacionamento, as chaves, alguns campos,
Crie um diagrama das tabelas

Marido Oriental 1 — N Esposa Oriental
Marido Oriental (#  )
Esposa Oriental (     &)

Paciente N  — N Doença

Carro N  — 1 Proprietário
Carro (#  )
Proprietário (        &)

Editora 1 — N Livros
Editora (#  )
Livros (   &)

Autor N — N Livros
