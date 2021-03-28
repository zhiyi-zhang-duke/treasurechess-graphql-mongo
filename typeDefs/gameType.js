const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLSchema
} = require("graphql");

const GameType = new GraphQLObjectType({
    //the name field here doesn't matter I guess...
    name: "Game",
    fields: {
        id: {
            type: GraphQLID,
            description: 'Game id'
          },
          event: {
            type: GraphQLString,
            description: 'event'
          },    
          site: {
            type: GraphQLString,
            description: 'Site of game'
          },
          stage: {
            type: GraphQLString,
            description: 'Round of tournament'
          },
          white: {
            type: GraphQLString,
            description: 'White side player'
          },    
          black: {
            type: GraphQLString,
            description: 'Black side player'
          },    
          result: {
            type: GraphQLString,
            description: 'Who won'
          },
          black_elo: {
            type: GraphQLString,
            description: 'Elo of black side player'
          },
          blackfide_id: {
            type: GraphQLString,
            description: 'blackfide_id'
          },
          black_title: {
            type: GraphQLString,
            description: 'black_title'
          },
          eco: {
            type: GraphQLString,
            description: 'eco'
          },
          event_date: {
            type: GraphQLString,
            description: 'event_date'
          },
          opening: {
            type: GraphQLString,
            description: 'opening'
          },
          variation: {
            type: GraphQLString,
            description: 'variation'
          },
          white_elo: {
            type: GraphQLString,
            description: 'white_elo'
          },
          whitefide_id: {
            type: GraphQLString,
            description: 'whitefide_id'
          },
          white_title: {
            type: GraphQLString,
            description: 'white_title'
          },
          moves: {
              type: new GraphQLList(GraphQLString),
              description: 'moves of game'
          }
    }
});

module.exports = GameType