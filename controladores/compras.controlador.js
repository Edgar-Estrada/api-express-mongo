const compra = require('../modelos/compras');
const producto = require('../modelos/productos')

const comprasControlador = {};

//Obtener compras
comprasControlador.getCompra = async (req,res)=>{
    const obtenerCompras = await compra.find();
    res.json(obtenerCompras);
}

//Obtener el producto por el id
comprasControlador.addCompra = async (req,res) => {
    const id = req.params.id;
    const oneProduct = await producto.findById(id);
    const añadirCompra = {
        nombreProducto: oneProduct.nombre,
        marcaProducto: oneProduct.marca,
        precioProducto: oneProduct.precio
    };
    const actualizarProducto = {
        stock: oneProduct.stock - 1
    };
    if(oneProduct.stock > 0){
        const nuevaCompra = new compra(añadirCompra)
        await nuevaCompra.save();
        await producto.findByIdAndUpdate(id,{$set: actualizarProducto}, {new: true});
        res.json({
            status: "Compra guardada",
            data: nuevaCompra
        });
    }else{
        res.json({
            status: 'No hay stock'
        })
    }
}


module.exports = comprasControlador;