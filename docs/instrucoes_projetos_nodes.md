# Iniciando projeto Node.js com TypeScript

## Setup do projeto

### Instalando as dependências do projeto:

Para iniciar, instale as dependências necessárias utilizando o comando abaixo:

```bash
npm i typescript tsx tsup -D
```

### Criando o arquivo `.gitignore`

Para ignorar a pasta `node_modules`, crie um arquivo `.gitignore` com o seguinte comando:

```bash
echo "node_modules/" >> .gitignore
```

### Criando a estrutura base do projeto

Crie a pasta `src` para organizar os arquivos do projeto:

```bash
mkdir src
```

Dentro da pasta `src`, crie o arquivo `server.ts`:

```bash
echo "" > src/server.ts
```

### Configurando o TypeScript

Para inicializar a configuração do TypeScript, execute o comando:

```bash
npx tsc --init
```

Esse comando cria o arquivo `tsconfig.json`. Dentro desse arquivo, vamos definir as configurações desejadas para o TypeScript. Limpe o conteúdo padrão e insira as seguintes configurações:

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "CommonJS",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true
  }
}
```

### Configurando os scripts no `package.json`

No arquivo `package.json`, adicione os seguintes scripts na seção `scripts`:

- `"dist": "tsup src"`: Gera a distribuição do projeto usando `tsup` e define o diretório `src` como origem.
- `"start:dev": "tsx src/server.ts"`: Inicia a aplicação em modo de desenvolvimento utilizando `tsx` para executar o TypeScript no arquivo `server.ts`.
- `"start:watch": "tsx watch src/server.ts"`: Executa a aplicação em modo `watch`, que recompila automaticamente quando há alterações no código.
- `"start:dist": "npm run dist && node dist/src/index.js"`: Gera a distribuição do projeto e executa o arquivo gerado dentro de `dist/src/index.js` usando `node`.

O arquivo `package.json` ficará assim após essas adições:

```json
{
  "scripts": {
    "dist": "tsup src",
    "start:dev": "tsx src/server.ts",
    "start:watch": "tsx watch src/server.ts",
    "start:dist": "npm run dist && node dist/src/index.js"
  }
}
```

### Criando o arquivo `.env`

Para configurar as variáveis de ambiente, crie um arquivo `.env` com o seguinte comando:

```bash
echo "PORT=3333" >> .env
```

Nesse exemplo, estamos definindo a variável de ambiente `PORT` como `3333`, que será a porta onde nosso servidor irá escutar.

Seguindo esses passos, você terá um projeto Node.js configurado com TypeScript, pronto para desenvolvimento e distribuição.

Passo a passo criado por mim; revisão do texto e melhoramento das explicações feita por IA.