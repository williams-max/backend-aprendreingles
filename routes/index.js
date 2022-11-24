const express = require("express");
const router = express.Router();
//const { translate } = require('free-translate');
const translate = require('translate-google')

var texto = " ";

function routes(app) {
/*
    router.get('/', async (req, res) => {

        res.send("funciona");
    });*/
    router.post('/recibo-texto', (req, res) => {
        console.log("body ", req.body)
        texto = req.body.texto;
        //connectionType=req.body.connectionType;
        res.send(texto);

    });


    router.get('/texto-traducido-ingles', async (req, res) => {
        /* texto="hola"
         const textEnglish = await translate(texto, { to: 'en' });
         res.send(textEnglish);*/

        const respuesta = await translate(texto, { to: 'en' }).then(res => {
            console.log("texto tradu ", res);
            return res;

        }).catch(err => {
            console.error(err);
        });

        res.send(respuesta);
    });

    router.get('/texto-traducido-espanol', async (req, res) => {

        /*  const textEspanol = await translate(texto, { to: 'es' });
          console.log("traduct  texto ", textEspanol)
          res.send(textEspanol);*/

        const respuesta = await translate(texto, { to: 'es' }).then(res => {
            console.log("texto tradu ", res);
            return res;

        }).catch(err => {
            console.error(err);
        });

        res.send(respuesta);
    });


    router.get("/movies", (req, res) => {
        res.end("We made it! And it's great");
    });

    router.get("/movies/:id", (req, res) => {
        return app.render(req, res, "/movies", { id: req.params.id });
    });

    return router;
};

module.exports = routes;
