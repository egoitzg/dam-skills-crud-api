var express = require("express"),
  bodyParser = require("body-parser");

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/participantes", require("./routes/members"));
app.use("/comentarios", require("./routes/comments"));

const PORT = process.env.PORT || 3000;
app.listen(PORT);

console.debug("Server listening on port: " + PORT);