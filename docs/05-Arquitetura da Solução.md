# Arquitetura da Solução

A solução será composta pela arquitetura backend para frontend. O backend será composto pelo framework NodeJS e banco de dados MongoBD. O frontend utilizará da linguagem JavaScript com framework NodeJS

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Exemplo: 

Os componentes que fazem parte da solução são apresentados na Figura abaixo.

![image](https://user-images.githubusercontent.com/20197817/136305736-9ebd43f5-5b11-4ba3-bc01-f57a570250e1.png)

<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
  - **Páginas Web** - Página responsiva em React
   - **Banco de dados** - armazenamento mantido banco de dados MongoBD
       
 - **API** - Disponibilização de dados conforme as regras do produto
 - **Hospedagem** - Heroku

A imagem a seguir ilustra a o fluxo do usuário em nossa solução. Logo após a tela de login ele terá a opção de navegar pelo menu principal da aplicação.

O usuário será redirecionado pelas diferentes opções do menu de acordo com suas interações. Por ser um software de gestão todas as telas cadastrais possuem design focado na experiência do usuário.


![Exemplo de UserFlow](/img/WireFrame%20Completo.png)


## Tecnologias Utilizadas

NodeJS: Permite criação de aplicações Javascript para executar uma aplicação localmente sem a necessidade de um navegador.

React: Uma biblioteca Javascript para criação de interfaces. Facilitando a comunicação entre diferentes partes de uma página. Realziando seu funcionamento através da componetização.

MongoBD: Banco de dados orientado a documentos não relacionais.


## Hospedagem

O frontend e backend serão hospeados no Heroku. O banco de dados Mongo estará disponível no MongoBD Atlas.

