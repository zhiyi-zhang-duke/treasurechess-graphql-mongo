const Express = require("express");
const { graphqlHTTP } = require('express-graphql');
const GameResolvers = require("./resolvers/gameResolvers")

var app = Express();

app.use("/graphql", graphqlHTTP({
    schema: GameResolvers,
    graphiql: true
}));


app.listen(4000, () => {
    console.log("Listening at :4000...");
});