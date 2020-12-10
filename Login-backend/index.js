// import de librerias
const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes');

const bodyParser = require('body-parser');


// Inicia instancia de express
const app = express();
// Middleware para escuchar las peticiones
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//variable para el puerto de escucha
app.set('PORT', 3000);

// Rutas de trabajo
app.get('/', (req,res)=>{
    res.send('HelloWorld!');
});

app.use('/api', apiRouter);

// Iniciar la escucha del puerto
app.listen(app.get('PORT'),()=>{console.log('server up')});

