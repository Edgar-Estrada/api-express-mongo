const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment'); //Incrementa el ID de uno en uno

const {Schema} = mongoose;

//Inicializar el plugin de auto incremento
autoIncrement.initialize(mongoose);

//Establecer el esquema de la coleccion
const producto = new Schema({
    marca: {type: String},
    nombre: {type: String, required: true},
    stock: {type: Number},
    precio: {type: Number, required: true},
    activo: {type: Boolean}
});

//Se establece el plugin de auto incrementar el id
producto.plugin(autoIncrement.plugin,{
    model: '_id',
    field: '_id',
    startAt: 1,
    incrementBy: 1
})

module.exports = mongoose.model('productos', producto);