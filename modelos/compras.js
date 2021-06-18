const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment'); //Incrementa el ID de uno en uno

const {Schema} = mongoose;

//Inicializar el plugin de auto incremento
autoIncrement.initialize(mongoose);

//Establecer el esquema de la coleccion
const compra = new Schema({
    nombreProducto: {type: String, required: true},
    marcaProducto: {type: String, required: true},
    precioProducto: {type: Number, required: true},
});

//Se establece el plugin de auto incrementar el id
compra.plugin(autoIncrement.plugin,{
    model: '_id',
    field: '_id',
    startAt: 1,
    incrementBy: 1
})

module.exports = mongoose.model('compras', compra);