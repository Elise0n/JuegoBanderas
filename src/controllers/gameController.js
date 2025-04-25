const Game = require("../models/Game")

/**
 * Crea un nuevo registro de partida
 */
exports.createGame = async (req, res) => {
  try {
    const { playerName, score, correctAnswers, totalTime, avgTime } = req.body

    // Validar datos
    if (!playerName || score === undefined || correctAnswers === undefined || totalTime === undefined) {
      return res.status(400).json({ message: "Faltan datos requeridos" })
    }

    // Crear nueva partida
    const newGame = new Game({
      playerName,
      score,
      correctAnswers,
      totalTime,
      avgTime,
    })

    // Guardar en la base de datos
    await newGame.save()

    res.status(201).json({
      message: "Partida guardada correctamente",
      game: newGame,
    })
  } catch (error) {
    console.error("Error al crear partida:", error)
    res.status(500).json({ message: "Error al guardar la partida" })
  }
}

/**
 * Obtiene todas las partidas
 */
exports.getAllGames = async (req, res) => {
  try {
    const games = await Game.find().sort({ createdAt: -1 })
    res.status(200).json(games)
  } catch (error) {
    console.error("Error al obtener partidas:", error)
    res.status(500).json({ message: "Error al obtener las partidas" })
  }
}

/**
 * Obtiene el ranking de las mejores 20 partidas
 */
exports.getRanking = async (req, res) => {
  try {
    // Obtener las 20 mejores partidas ordenadas por puntaje, respuestas correctas y tiempo
    const ranking = await Game.find().sort({ score: -1, correctAnswers: -1, totalTime: 1 }).limit(20)

    res.status(200).json(ranking)
  } catch (error) {
    console.error("Error al obtener ranking:", error)
    res.status(500).json({ message: "Error al obtener el ranking" })
  }
}

/**
 * Obtiene estadísticas generales
 */
exports.getStats = async (req, res) => {
  try {
    // Contar total de partidas
    const totalGames = await Game.countDocuments()

    // Obtener puntaje promedio
    const avgScoreResult = await Game.aggregate([{ $group: { _id: null, avgScore: { $avg: "$score" } } }])
    const avgScore = avgScoreResult.length > 0 ? avgScoreResult[0].avgScore : 0

    // Obtener tiempo promedio
    const avgTimeResult = await Game.aggregate([{ $group: { _id: null, avgTime: { $avg: "$totalTime" } } }])
    const avgTime = avgTimeResult.length > 0 ? avgTimeResult[0].avgTime : 0

    res.status(200).json({
      totalGames,
      avgScore,
      avgTime,
    })
  } catch (error) {
    console.error("Error al obtener estadísticas:", error)
    res.status(500).json({ message: "Error al obtener las estadísticas" })
  }
}
