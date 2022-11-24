const express = require("express");
const router = express.Router();
const { translate } = require('free-translate');



function routes(app) {

    router.get("/", (req, res) => {
        res.json({
            hello: "hola Genesis!"
        });
    });

/*
    router.post('/recibo-texto', (req, res) => {
        var texto = "hola";
        console.log("body ", req.body)
        texto = req.body.texto;
        //connectionType=req.body.connectionType;
        res.send(texto);

    });


    router.get('/texto-traducido-ingles', async (req, res) => {

        var texto = "hola"
        const textEnglish = await translate(texto, { to: 'en' });
        res.send(textEnglish);
    });

    router.get('/texto-traducido-espanol', async (req, res) => {
        var texto = "hola";
        const textEspanol = await translate(texto, { to: 'es' });
        console.log("traduct  texto ", textEspanol)
        res.send(textEspanol);
    });*/


    router.get("/movies", (req, res) => {
        res.send("We made it! And it's great");
    });
/*
    router.get("/movies/:id", (req, res) => {
        return app.render(req, res, "/movies", { id: req.params.id });
    });*/

    return router;
};

module.exports = routes;
