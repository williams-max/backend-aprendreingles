const express = require("express");
const router = express.Router();
//const { translate } = require('free-translate');
const translate = require('translate-google')
const fs = require('fs');

var texto = " ";

function routes(app) {

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

    //api for db.json
    router.get('/get-textdbone', async (req, res) => {
        let rawdata = fs.readFileSync('/tmp/dbone.json');
        let respuesta = JSON.parse(rawdata);

        res.send(respuesta);

    });

    router.post('/set-textdbone', async (req, res) => {
        const txtReciv = req.body.texto;
        //console.log("texto recibido ",txtReciv)
        
        const dato = {
            texto: txtReciv
        }
        //  fs.writeFileSync('public/dbone.json',dato);
        fs.writeFileSync('/tmp/dbone.json', JSON.stringify(dato));
        if (txtReciv == undefined) {
            res.send("empty");
        } else {
            res.send(txtReciv.toString());
        }

    });

    router.post('/set-cont-view', async (req, res) => {
        console.log("recip ", req.body)
        const contnumber = req.body.contnumber;
        console.log("dato recibido ", contnumber)
        const dato = {
            contview: Number(contnumber)
        }
        // fs.writeFileSync('public/dbone.json', JSON.stringify(dato));
        //res.send(contnumber.toString());
        res.send("ok");

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
