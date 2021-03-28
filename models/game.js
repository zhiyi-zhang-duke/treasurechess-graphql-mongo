const Mongoose = require("mongoose");

Mongoose.connect("mongodb://localhost/treasure-chess");

var gameSchema = Mongoose.Schema({
    event: String,
    site: String,
    stage: String,
    black: String,
    white: String,
    result: String,
    black_elo: String,
    blackfide_id: String,
    black_title: String,
    eco: String,
    event_date: String,
    opening: String,
    variation: String,
    white_elo: String,
    whitefide_id: String,
    white_title: String,
    moves: [String]
})
const GameModel = Mongoose.model("game", gameSchema, "game");

module.exports = GameModel