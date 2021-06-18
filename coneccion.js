const mongoose = require('mongoose')

const URL = 'mongodb://localhost/productos';

mongoose.connect(URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})
.then(db => console.log('Conexion a la BD exitosa'))
.catch(err => console.error(err))

module.exports = mongoose;