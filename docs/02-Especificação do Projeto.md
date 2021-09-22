# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

## Personas

<table>
  <tr>
    <th>Foto</th>
    <th>Nome</th>
    <th>Descrição</th>
    <th>Aplicativos</th>
    <th>Motivações</th>
    <th>Frustrações</th>
    <th>Hobbies, História</th>
  </tr>
  <tr>
    <td><img title="Fabiana Mendes" src="https://user-images.githubusercontent.com/81269204/134266920-6314cd46-df83-46fd-b995-847752947a2b.png"/></td>
    <td>Fabiana Mendes</td>
    <td>
      <ul>
        <li>42 anos</li>
        <li>Diretora Comercial e de Operações em uma grande rede de estacionamentos</li>
        <li>Mora em São Paulo - SP</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>LinkedIn</li>
        <li>Instagram</li>
        <li>Pinterest</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Inovar nas estratégias de seu time.</li>
        <li>Ajudar pessoas e tornar o mundo um lugar melhor.   </li>
      </ul>
    </td>
    <td>
        Por causa do excesso de tarefas no trabalho, não tem tempo suficiente para se dedicar aos seus filhos e lazer.
    </td>
    <td>
        Nasceu em São Paulo e é formada em Administração de Empresas pela USP com mestrado em Finanças e Economia pela FGV EESP, é casada e têm duas filhas de 12 e 14 anos. Nas horas vagas adora praticar atividades ao ar livre, frequentar academia, passear com suas filhas em shoppings e parque e ir a restaurantes badalados com o marido e amigos
    </td>
  </tr>
  <tr>
    <td><img title="Marcos Ribeiro" src="https://user-images.githubusercontent.com/81269204/134266932-2ff4d7b2-88d3-4afb-bd14-0123dff9cc64.png"/>
    </td>
    <td>Marcos Ribeiro</td>
    <td>
      <ul>
        <li>45 anos</li>
        <li>Gerente Comercial e Marketing de uma rede de estacionamentos</li>
        <li>Mora em Belo Horizonte - MG</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>WhatsApp</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Focado em inovações e sempre buscando novidades no mercado internacional.</li>
        <li>Dedicado ao trabalho, busca ser visto como autoridade no mercado.</li>
      </ul>
    </td>
    <td>
        Seus principais obstáculos são a pouca mão de obra qualificada para colocar em pratica todas as suas ideias e a falta de orçamento para investir em novas soluções.
    </td>
    <td>
        Formado em Economia pela UFMG com Pós-graduação em Marketing Estratégico pela PUC Minas, atualmente mora em Belo Horizonte, casado e com 3 filhos. É uma pessoa comunicativa e extrovertida, nas horas vagas gosta de praticar esportes, passear com seus filhos e esposa em parques, assistir futebol e fazer churrasco em família.
    </td>
  </tr>
  <tr>
    <td><img title="Eduardo Andrade" src="https://user-images.githubusercontent.com/81269204/134266945-326d0d0d-826c-4b16-87f3-dd1611b4bb74.png"/></td>
    <td>Eduardo Andrade</td>
    <td>
      <ul>
        <li>34 anos</li>
        <li>Proprietário de um estacionamento de médio porte em Curitiba.</li>
        <li>Mora em Curitiba - PR</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Facebook</li>
        <li>Instagram</li>
        <li>Mercado Livre</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>Expandir seu empreendimento para uma rede de estacionamentos.</li>
        <li>Empreender e criar novos postos de trabalho. </li>
      </ul>
    </td>
    <td>
        Perda de tempo com repasses de relatórios feitos pela sua equipe. Todo trabalho depende da sua aprovação e é feito com planilhas no Excel e boa parte de suas tarefas fica sem registro, muitas informações se perdem durante a rotina.
    </td>
    <td>
        Formado em Administração de Empresas pela UFPR, com extensão em Marketing. Sempre atendo as inovações do mercado e em busca de novas tecnologias. É casado e sua esposa está gravida do primeiro filho do casal. Gosta de viajar com sua esposa, ler livros, escutar músicas e frequentar bons restaurantes. 
    </td>
  </tr>
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|   EU COMO... `PERSONA`  | QUERO/PRECISO ... `FUNCIONALIDADE`                            |PARA ... `MOTIVO/VALOR`                        |
|-------------------------|---------------------------------------------------------------|-----------------------------------------------|
|Eu como Eduardo Andrade  | Registrar a horas dos veículos estacionados                   | Para ter o controle diário                    |
|Eu como Marcos Ribeiro   | Registrar o veículo                                           | Para ter o controle diário                    |
|Eu como Fabiana Mendes   | Preciso cadastrar o valor por hora                            | Para fazer a cobrança                         |
|Eu como Eduardo Andrade  | Quero gerar relatórios ao fim do dia                          | Para administrar contas                       |
|Eu como Fabiana Mendes   | Preciso de uma lista de todas as vagas                        | Para ter controle de vagas ocupadas e vazias  |
|Eu como Eduardo Andrade  | Preciso gerar relatórios de faturamento                       | Para que eu tenha controle do caixa           |
|Eu como Marcos Ribeiro   | Preciso cadastrar veículos                                    | Para fazer a cobrança                         |
|Eu como Fabiana Mendes   | Preciso gerar relatórios de vagas disponíveis                 | Para disponibiliza-las de forma ágil e precisa|
|Eu como Eduardo Andrade  | Preciso registrar saída e entrada dos veículos                | Para controle do estacionamento               |
|Eu como Marcos Ribeiro   | Quero cadastrar usuários                                      | Para controle de usuário                      |
|Eu como Fabiana Mendes   | Quero gerar relatório de localização de veículos estacionados | Para consultar localização dos veículos       |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito                                          | Prioridade |
|------|-----------------------------------------------------------------|------------|
|RF-001| Permitir que o usuário cadastre veículo e a hora                | ALTA       | 
|RF-002| Permitir que o usuário faça consultas de vagas ocupadas e vazias| ALTA       |
|RF-003| Permitir que o usuário cadastre o valor hora                    | ALTA       |
|RF-004| Permitir que o usuário cadastre o total de vagas                | MÉDIA      |
|RF-005| Cadastrar usuários                                              | ALTA       | 
|RF-006| Registrar entra de veículos                                     | ALTA       |
|RF-007| Registrar saída de vínculos                                     | ALTA       |
|RF-008| Gerar relatório estático do estacionamento                      | MÉDIA      |
|RF-009| Gerar relatório de faturamento                                  | MÉDIA      |

### Requisitos não Funcionais

|ID     | Descrição do Requisito                                |Prioridade |
|-------|-------------------------------------------------------|-----------|
|RNF-001| O sistema teverá ter o design amigavél                |  ALTA     | 
|RNF-002| Deve processar requisições do usuário em no máximo 5s |  BAIXA    | 
|RNF-003| O sistema deve ser responsivo                         |  MÉDIA    | 
|RNF-004| O sistema será desenvolvido em HTML, CSS, JS e React  |  ALTA     | 
|RNF-005| O sistema será construído para rodar em ambiente web  |  MÉDIA    | 

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                                 |
|--|-----------------------------------------------------------|
|01| Primeira versão será lançada apenas Web                   |
|01| O projeto deverá ser entregue até o final do semestre     |

