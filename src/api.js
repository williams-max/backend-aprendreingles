const express = require("express");
const serverless = require("serverless-http");
const axios = require('axios');
//const { translate } = require('free-translate');
const translate = require('translate-google')



const app = express();
const router = express.Router();

const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors({
  origin: '*'
}));
//const showRoutes = require("../routes/index.js");
//const showRoutes = require("./routes/index.js");
router.get("/", (req, res) => {
  res.json({
    hello: "hola Genesis!"
  });
});

router.get('/texto', async (req, res) => {

  var texto = "hola"

  const respuesta =await translate('I speak Chinese!', {from: 'en', to: 'zh-cn'}).then(res => {
    console.log("texto tradu ", res.text);
    return res.text;
    //=> I speak English
    //  console.log(res.from.language.iso);
    //=> nl
  }).catch(err => {
    console.error(err);
  });

  // const textEnglish = await translate(texto, { to: 'en' });
  res.send("hola");
});

app.use(`/.netlify/functions/api`, router);

//app.use(`/.netlify/functions/api`,showRoutes(app));
module.exports = app;
module.exports.handler = serverless(app);