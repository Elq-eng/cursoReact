const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();


const app = express();

// conexion con base de datos
dbConnection()


// cors 
app.use( cors() );
// directorio publico
app.use( express.static('public'));
// parseo del body 
app.use( express.json() );


// ruta
// TODO:  auth// crear, login , renew
app.use('/api/auth', require('./routes/auth'));
// TODO:  CRUD  eventos 


// escuchar peticiones
app.listen( process.env.PORT , ()=>{
  console.log(`Servidor corriendo en puerto ${ process.env.PORT }`)
} )