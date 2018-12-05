'use strict';
const express = require('express');
const express_graphql = require('express-graphql');
const mongoose = require('mongoose');
const config = require('./config/db');
const schema = require('./schema/schema');

const app = express();

app.use('/graphql', express_graphql({
    schema
}));

// Conexion a la base de datos MongoDB
mongoose.connect(config.database, { useNewUrlParser: true }).then(
    () => {
        console.log('Conectado a la base de datos ' + config.database)
        app.listen(port, () => {
            console.log("Servidor escuchando en puerto " + port);
        });
    },
    err => { console.log('Error de conexion ' + err) }
);


// Usar este puerto si la app será alojada en Heroku
var port = process.env.PORT || 8080;
// Usar este puerto para desarrollo
// const port = 3000;


// Establecer carpeta
app.use(express.static(path.join(__dirname, 'public')))


//Headers necesarios para que el servidor node de accso a las peticiones no importando que cabeceras
/*app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });*/

//app.use('/api', api);