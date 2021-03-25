const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
  console.log(`Running test app listening at http://localhost:${port}`);
});

app.post("/submit", (req, res) => {
  res.send("Got a post/submit request");

  console.log("Submit received!");
  console.log(req.body);
});

app.post("/retrieve", (req, res) => {
  res.send("Got a post/retrieve request");

  console.log("Retrieve received!");
  console.log();
});

// GraphQL stuff

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return "Hello world!";
  },
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);
app.listen(4000);
console.log("Running a GraphQL API server at http://localhost:4000/graphql");
