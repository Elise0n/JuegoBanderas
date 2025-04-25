const express = require("express")
const router = express.Router()
const gameController = require("../controllers/gameController")

// Rutas para juegos
router.post("/games", gameController.createGame)
router.get("/games", gameController.getAllGames)
router.get("/ranking", gameController.getRanking)
router.get("/stats", gameController.getStats)

module.exports = router
