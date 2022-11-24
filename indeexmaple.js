const express = require('express');
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors');
const { translate } = require('free-translate');

//var texto = " ";

const PORT = process.env.PORT || 4000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors({
    origin: '*'
}));

const showRoutes = require("./routes/index.js");

//server.use("/api", showRoutes(server));

server.get('/', async (req, res) => {

    try {
        texto = "hola"
        const textEnglish = await translate(texto, { to: 'en' });
        res.send(textEnglish);
    } catch (err) {
        //
        console.log(err)
        var aux=err.toString();
        console.log("error ",aux)

        res.send(aux);
     //   JSON.stringify(JSON.parse(jsonStr));
     //   res.send(JSON.stringify(JSON.parse(err)))
      //  next(err);
    }
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
/*
server.get("/",(req,res)=> {
    res.send("backend funcionando");
})*/
server.get("/api/hello", (req, res, next) => {

    try {
        res.send("hello funcionando");
        // throw new Error('There was an error getting the users');

    } catch (err) {
        next(err);
    }
})

function handleErrors(err, req, res, next) {
    console.log(err);

 //   res.send(err)
    res.status(500).send('An internal server error occurred');
};

//server.use(handleErrors);

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
});

