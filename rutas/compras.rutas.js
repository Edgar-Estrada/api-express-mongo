const express = require('express')
const router = express.Router();

const comprasControlador = require('../controladores/compras.controlador')

router.get('/', comprasControlador.getCompra); //Metodo para obtener las compras
router.get('/:id', comprasControlador.addCompra); //Metodo añadir una compra en base al id del producto

module.exports = router;