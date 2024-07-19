import { Router } from "express";
import * as PlayersController from "./controllers/players-controller";

// Usando a notação " * as " conseguimos importar todas as funções dentro do arquivo especificado no caminho acima

const router = Router()
router.get("/players", PlayersController.getPlayer)
router.post("/players", PlayersController.postPlayer)
router.delete("/players/:id", PlayersController.deletePlayer)
router.patch("/players/:id", PlayersController.updatePlayers)

router.get("/players/:id", PlayersController.getPlayerById)
// No exemplo acima estamos usando uma router param "parametro de rota". Depois da "/" utilizamos ":" + o nome do parametro que iremos passar

export default router