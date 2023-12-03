const express = require("express");
const bodyParser = require("body-parser");
const connection = require("./connection");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

connection()
  .then(() => {
    console.log('Conectado ao servidor MongoDB');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });

app.use("/category", require("./routes/category"));
app.use("/task", require("./routes/task"));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}.`);
});