// import de librerias
const express = require('express');
const morgan = require('morgan');
const apiRoutes = require('./routes')

// Inicia instancia de express
const app = express();
// Middleware para escuchar las peticiones
app.use(morgan('dev'));
//variable para el puerto de escucha
app.set('PORT', 3000);

// Rutas de trabajo
app.get('/', (req,res)=>{
    res.send('HelloWorld!');
})

// Iniciar la escucha del puerto
app.listen(app.get('PORT'),()=>{console.log('server up')});

