# Implementar POST

No arquivo `routes.ts` vamos implementar o POST.

```typescript
const router = Router()
router.get('/players', PlayersController.getPlayer)
router.post('/players')
```
