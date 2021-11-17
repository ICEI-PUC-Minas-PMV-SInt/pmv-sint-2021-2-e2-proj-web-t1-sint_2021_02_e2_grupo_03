# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|Caso de Teste|Validação de Login  |
|--|--|
|Requisitos Associados| Tela de login e funcionalidade de armazenamento dos dados na localstorage previamente implementada.|
|Objetivo do Teste| Autenticar corretamente os diversos usuários cadastrados para acessar a solução.
|Passos|1) Preencher usuário e senha e efetuar primeiro login para cadastro 2)Acessar novamente preenchendo corretamente os dados com usuário e senha previamente cadastrados. 3) Preencher o campo de usuário informando um novo usuário para cadastro.
|Critérios de Êxito|Os usuários precisam ser cadastrados e seus dados de login e senha salvos no local storage, novos usuários precisam ser cadastrados no primeiro login, o usuário e senha deve ser consistido de maneira que uma senha incorreta inviabilize o login do usuário

|Caso de Teste|Entrada e saída de veículos |
|--|--|
|Requisitos Associados| Tela de entrada e saída de veículos |
|Objetivo do Teste| Controle de entrada e saída de veículos
|Passos|1) Preencher os campos "Proprietário", "Veículo", "Placa", "Modelo", "Marca", "Número vaga ocupada" 2) Salvar o registro 3) Validar se a informação foi gravada.
|Critérios de Êxito|Informar todos os campos obrigatórios

|Caso de Teste|Visualizar Reservas |
|--|--|
|Requisitos Associados| Tela de reservas |
|Objetivo do Teste| Verificar se as informações de reservas estão corretos.
|Passos|1) Ao entrar na tela as reservas devem ser carregadas. 2) Ao clicar em "Incluir" um novo registro será criado 3) Ao clicar em "Registrar saída" uma saída será efetuada.
|Critérios de Êxito|Informar todos os campos obrigatórios

|Caso de Teste|Visualizar Reservas |
|--|--|
|Requisitos Associados| Tela de cadastro de períodos |
|Objetivo do Teste| Verificar a possibilidade de cadastrar períodos conforme necessidade
|Passos|1) Ao entrar na tela os períodos cadastrados devem ser apresentados. 2) Preencha dos campos "período", "Data Inicial", "Data Final", "Hora Inicial", "Hora Final" 3) Ao clicar em "Salvar" um novo período será criado.
|Critérios de Êxito|Informar todos os campos obrigatórios

|Caso de Teste|Visualizar Mapa de Vagas |
|--|--|
|Requisitos Associados| Tela de mapa de vagas |
|Objetivo do Teste| Permite visualizar as vagas preenchidas pelos respectivos carros de entrada
|Passos|1) Ao entrar na tela as vagas ocupadas e disponíveis serão apresentadas. 2) Ao passar o cursos sobre a vaga as informações de número da vaga e código da reserva será apresentado.
|Critérios de Êxito|Visualizar a atual situação do estacionamento
