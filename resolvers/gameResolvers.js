const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");
const GameModel = require("../models/game");
const GameType = require("../typeDefs/gameType")

const GameResolvers = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "Query",
        fields: {
            games: {
                type: GraphQLList(GameType),
                resolve: (root, args, context, info) => {
                    //To do: get rid of limit for dev
                    var results = GameModel.find().limit(50).exec()
                    results.then(game_info =>{
                        console.log(game_info)
                    })
                    return results;
                }
            },
            game: {
                type: GameType,
                args: {
                    id: { type: GraphQLNonNull(GraphQLID) }
                },
                resolve: (root, args, context, info) => {
                    var result = GameModel.findById(args.id).exec()
                    console.log(result)
                    return result;
                }
            },
            openings: {
                type: GraphQLList(GameType),
                args: {
                    openingType: { type: GraphQLNonNull(GraphQLString) }
                },
                resolve: (root, args, context, info) => {
                    console.log(args)
                    var result = GameModel.find({ opening : args.openingType}).limit(50).exec()
                    return result;
                }
            }
        }
    }),
    mutation: new GraphQLObjectType({
        name: "Mutation",
        fields: {
            game: {
                type: GameType,
                args: {
                    firstname: { type: GraphQLNonNull(GraphQLString) },
                    lastname: { type: GraphQLNonNull(GraphQLString) }
                },
                resolve: (root, args, context, info) => {
                    var game = new GameModel(args);
                    return game.save();
                }
            }
        }
    })
});

module.exports = GameResolvers