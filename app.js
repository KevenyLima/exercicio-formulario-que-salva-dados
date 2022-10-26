const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

//configurando body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const contentFilePath = "./content.txt";
//arquivos estaticos
app.use(express.static(__dirname + "\\public"));
app.use(express.static(__dirname + "\\content.txt"));
//rotas
app.get("/", function (red, res) {
  res.sendFile(__dirname + "\\public\\index.html");
});
app.post("/", function (req, res) {
  save(req.body);
  res.redirect("/");
});
app.get("/listagem", function (req, res) {
  res.sendFile(__dirname + "\\public\\listagem.html");
  //res.get(__dirname+"content.txt")
});
//guardando dados
function save(content) {
  const contentString = JSON.stringify(content) + "\n";
  return fs.appendFileSync(contentFilePath, contentString);
}

//carregando dados
function load() {
  const contentChange = fs.readFileSync(contentFilePath, "utf-8");
  return contentChange;
}
//save("salvando texto:hello world")
//const conteudo = load()
//console.log(conteudo)
//servidor
app.listen(8081, function () {
  console.log("servidor rodando 8080");
});
