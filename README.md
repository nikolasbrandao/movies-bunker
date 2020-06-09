# Movies Bunker

## Sobre o repositório

Este repositório é um fork do desafio da Junto Seguros para a vaga de
Desenvolvedor Frontend, a descrição completa do desafio pode
ser encontrada no [link](https://github.com/GitJMSeguradora/jobs/blob/master/front/Challenge.md).

## Iniciando

A base do desafio é criar um SPA que conectado a API fornecida pela The Open Movie Database [OMDb](http://www.omdbapi.com/) e permita que nosso usuário faça buscas no catálogo de filmes.

Para o desafio optei por utilizar React e construir uma Single Page Application algumas bibliotecas para chegar ao resultado esperado e entregar uma boa experiência para o usuário.

## Solução

|      Tela principal      |    Tela de Favoritos     | Tela de favoritos (Vazia) |
| :----------------------: | :----------------------: | :-----------------------: |
| ![Screen](./Screen1.png) | ![Screen](./Screen2.png) | ![Screen](./Screen3.png)  |

A página busca na base da OMDb os filmes digitados pelo usário e entrega algumas informações básicas sobre o filme, como incremento o usuário pode clicar no icone de estrela e favoritar seus filmes preferidos, que podem ser consultados na aba lateral.

Utilizei como base para o desenvolvimento me guiar seguindo o conceito de mobile first e projetei toda a solução direcionada inicialmente para dispositivos movéis.

### Pré requisitos

Para utilizar os projetos é necessário ter o Node instalado na máquina, o projeto foi criado utilizando node na versão 12.16.3 download [aqui](https://nodejs.org/en/).

O projeto utilizou como base de sua criação o create react app.

## Instalação

Para rodar o projeto basta utilizar o comando:

```bash
  $ npm install
  # ou caso utilize yarn
  $ yarn install
```

## Rodando o projeto

```bash
$ npm start
# ou caso utilize yarn
$ yarn start
```

O projeto utiliza além do react, as seguintes bibliotecas:

- Axios (recuperar os dados da Api)
- React Router Dom (gerenciar a navegação entre as páginas)
- Redux & React Redux (estado global para a aplicação)
- Redux Persist (persistir dados na página mesmo após fecharmos a página, persistindo os dados no navegador)
- Styled Components (auxiliar na criação dos componentes, estilos, e temas)
- Styled Icons (opções de ícones para a página)

## Estrutura do projeto

    src/
      -assets/
      -components/
      -pages/
        -Favorites/
        -Home/
      -redux/
      -routes/
      -services/

### assets

Pasta para a definicação do tema padrão da nossa aplicação.

### components

Nesse diretório ficam os componentes que podem ser compartilhados no nosso projeto, componentes 'comuns' para todo o projeto.

### pages

O diretório onde ficam armazenadas as páginas, cada página fica dentro do seu respectivo diretório, a página tem como principal responsabilidade buscar e tratar dados (através do services e redux) para serem repassados para os componentes.

##### Observação

Caso a pagina necessite de estilos própios eles são encontrados no arquivos _styles.js_ que ficam dentro do diretório da página e não devem ser importados por nenhuma outra página, caso isso ocorra ele deve ser deslocado para o diretório \_components- e virar dependência de ambas as páginas.

### redux

A pasta contém a configuração da nossa store, da biblioteca redux-persist.
O projeto utiliza o conceito a estrutura do Redux com o padrão Duck, nesse padrão agregamos as _actions_, _reducers_ e _types_ em um único arquivo, caso queira conhecer mais sobre o padrão sugiro os links:

- [Ducks Modular Redux](https://github.com/erikras/ducks-modular-redux)
- [Scaling your Redux App with ducks](https://www.freecodecamp.org/news/scaling-your-redux-app-with-ducks-6115955638be/)

Nosso aplicativo utiliza a biblioteca redux-persist para persistir os dados em conjunto com o LocalStorage, o nome da nossa store é movieStorage e
ela é criada no redux e no localStorage assim que a página é aberta.

### routes

Organização das rotas da aplicação utilizando react router dom, nosso roteamento também depende do componente de TabBar criado na pasta components.

### services

O diretório services armazena os arquivos responsáveis por recuperar e enviar dados para nossas API's.
