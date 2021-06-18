const express = require('express')
const router = express.Router();

const productosControlador = require('../controladores/productos.controlador')

router.get('/', productosControlador.getProductos); //Metodo para buscar productos
router.get('/:id', productosControlador.getProducto); //Metodo para buscar un producto en especifico
router.post('/', productosControlador.postProducto); //Metodo para añadir un producto
router.put('/:id', productosControlador.putProducto); //Metodo para actualizar un producto
router.put('/eliminar/:id', productosControlador.deleteProducto); //Metodo para eliminar logicamente un producto

module.exports = router;