# API Champions League

## Descrição
Este projeto é uma API desenvolvida em Node.js para gerenciar dados relacionados à clubes da Liga dos Campeões. A aplicação utiliza TypeScript e tem como objetivo fornecer uma estrutura robusta para a manipulação de informações sobre times e jogadores.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

```
src/
├── controllers/
├── data/
├── models/
├── repositories/
├── services/
└── utils/
```

- **controllers/**: Contém a lógica de controle da aplicação, gerenciando as requisições e respostas.
- **data/**: Armazena arquivos e configurações de dados utilizados pela aplicação.
- **models/**: Define as estruturas de dados e as entidades que representam os objetos principais da aplicação.
- **repositories/**: Encapsula a lógica de acesso a dados, permitindo interações com bancos de dados ou outras fontes de dados.
- **services/**: Contém a lógica de negócio da aplicação, centralizando as regras e operações mais complexas.
- **utils/**: Funções utilitárias que podem ser usadas em toda a aplicação.

## Scripts

- `dist`: Compila o código TypeScript para JavaScript.
- `start:dev`: Inicia o servidor em modo de desenvolvimento.
- `start:watch`: Inicia o servidor em modo de observação, reiniciando automaticamente em alterações.
- `start:dist`: Compila o código e inicia o servidor a partir da versão compilada.

## Dependências

### Dependências
- `cors`: Middleware para habilitar CORS.
- `express`: Framework web para Node.js.

### Dependências de Desenvolvimento
- `@types/cors`: Tipos TypeScript para o middleware CORS.
- `@types/express`: Tipos TypeScript para o framework Express.
- `tsup`: Ferramenta para empacotar o código TypeScript.
- `tsx`: Executa arquivos TypeScript diretamente.
- `typescript`: Compilador TypeScript.

## Licença
Este projeto está licenciado sob a Licença ISC.