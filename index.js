//Librerias
const express = require('express')
const app = express()
const morgan = require('morgan') //Indica las peticiones que se estan haciendo
const cors = require('cors') //Acepta peticiones desde el cliente
const {mongoose} = require('./coneccion') //Tiene el driver de MongoDB y es un ORM
const bodyParser = require('body-parser');

//Asignar puerto
app.set('port', process.env.PORT || 4000) //La variable port puede tomar el puerto dependiendo de donde este, si no esta en produccion se pone el puerto 4000

//Middlewares / Uso de librerias
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rutas
app.use('/productos', require('./rutas/productos.rutas'))
app.use('/compras', require('./rutas/compras.rutas'))

//Inicializar el servidor
app.listen(4000, ()=>{
    console.log('Servidor corriendo ', app.get('port'))    
})