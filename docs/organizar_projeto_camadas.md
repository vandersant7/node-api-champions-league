# Camadas

Para melhorar ainda mais nossa aplicação, vamos começar a organizar ele em camadas. Primeiramente vamos iniciar a tudo que diz respeito a nossa aplicação.

## 1° PASSO:

```typescript
//app.ts

import express from 'express'
import { getPlayer } from './controllers/players-controller'

function createApp() {
  const app = express()

  // Esse middleware define que o conteúdo será um json
  app.use(express.json())

  app.get('/', (req: Request, res: Response) => {
    res.json({ player: 'Beckham ' })
  })

  return app
}

export default createApp
```

De dentro do `server.ts`, estamos pegando `const app = express()`, `app.use(express.json())` e o `app.get()` respectivamente. Mas a função app.get() é um controller, como ela lida com requisições. E ele não pode estar aí, para isso, vamos fazer as seguintes mais alterações...

## 2° PASSO:

Vamos criar a camada `controllers`. Para isso, vamos criar um novo diretório dentro de `src` com nome de `controllers`. Dentro de `controllers`, um arquivo com nome `players-controller.ts`.

```typescript
//players-controller.ts

import { Request, Response } from 'express'

export const getPlayer = (req: Request, res: Response) => {
  res.json({ player: 'Beckham ' })
}
```

Com essas mudanças, em vez de passarmos o controller diretamente dentro `app.get('/', controlerAqui)`, passamos apenas o no controller `getPlayer`

```typescript
//app.ts

import express from 'express'
import { getPlayer } from './controllers/players-controller'

function createApp() {
  const app = express()

  // Esse middleware define que o conteúdo será um json
  app.use(express.json())

  app.get('/', getPlayer)

  return app
}

export default createApp
```

## 3° PASSO:

VAMOS criar a camada `routes.ts`. Para isso, crie um novo arquivo dentro `src`chamado `routes.ts`. Dentro dele, importe `Router` de express.

```typescript
import { Router } from 'express'
```

Crie uma instância de `router`, lembrando que esse nome pode ser o que a gente quiser dar.

```typescript
const router = Router()
```

Invoque `router`

```typescript
router.get('/api')
```

Agora, vamos trazer o `getPlayer` para o router que acabamos de criar

```typescript
router.get('/api', getPlayer)

export default router
```

## 4° PASSO: Criando a camada service.

Dentro do nosso controller, temos o nosso response trazendo o `{ player: ' Ronaldo ' }`

```typescript
//players-service.ts

export const getPlayerDataService = async () => {
  return { player: ' Ronaldo ' }
}
```

## 5° PASSO: Criando a camada utils.

Dentro de `src`, vamos criar um novo diretório chamado `utils`. Nele, iremos criar um arquivo com nome `http-helper.ts`. O objetivo desse arquivo é retornar o status code.

```typescript
//http-helpers.ts

interface HttpResponse {
  statusCode: number
  body: any
}

export const ok = async (data: any): Promise<HttpResponse> => {
  return {
    statusCode: 200,
    body: data,
  }
}
```
