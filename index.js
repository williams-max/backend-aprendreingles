const express = require('express');
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const { translate } = require('free-translate');

var texto = " ";

const PORT=process.env.PORT || 4000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors({
  origin: '*'
}));

const showRoutes = require("./routes/index.js");

//server.use("/api", showRoutes(server));

server.get('/api/texto-traducido-ingles', async (req, res) => {
    texto="hola"
    const textEnglish = await translate(texto, { to: 'en' });
    res.send(textEnglish);
});

server.get("/",(req,res)=> {
    res.send("backend funcionando");
})
server.get("/api/hello",(req,res)=> {
    res.send("hello funcionando");
})

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
});

