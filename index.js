const express = require('express');
const server = express();
const bodyParser = require("body-parser");
const cors = require('cors');

const PORT=process.env.PORT || 4000;

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use(cors({
  origin: '*'
}));

const showRoutes = require("./routes/index.js");

server.use("/api", showRoutes(server));


server.get("/",(req,res)=> {
    res.send("backend funcionando");
})

server.listen(PORT, err => {
    if (err) throw err;
    console.log(`> Ready on ${PORT}`);
});
