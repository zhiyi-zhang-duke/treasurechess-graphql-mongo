const Express = require("express");
const { graphqlHTTP } = require('express-graphql');
const GameResolvers = require("./resolvers/gameResolvers")
const cors = require('cors')

var app = Express();

app.use(cors())
app.use("/graphql", graphqlHTTP({
    schema: GameResolvers,
    graphiql: true
}));


app.listen(3001, () => {
    console.log("Listening at :3001...");
});