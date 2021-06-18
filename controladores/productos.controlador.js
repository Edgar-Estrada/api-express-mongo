const producto = require('../modelos/productos');

const productosControlador = {};


//Obtener los productos que esten activos
productosControlador.getProductos = async (req,res) => {
    const obtenerProductos = await producto.find();
    productosActivos=[];
    obtenerProductos.map(value=>{
        value.activo && productosActivos.push(value)
    });
    res.json(productosActivos);
}

//Obtener el producto por el id
productosControlador.getProducto = async (req,res) => {
    const oneProduct = await producto.findById(req.params.id);
    oneProduct	? res.json(oneProduct) : res.status(404).send('Not Found');
}


//Añade el producto si no esta repetido por nombre y marca
productosControlador.postProducto = async (req,res) => {
    const añadirProducto = {
        nombre: req.body.nombre,
        marca: req.body.marca,
        stock: req.body.stock,
        precio: req.body.precio,
        activo: true
    }
    const productos = await producto.find();
    let repetido = false;
    productos.map(value=>{
        if(value.nombre == añadirProducto.nombre && value.marca == añadirProducto.marca){
            repetido = true;
        }
    })
    if(repetido == false){
        const nuevoProducto = new producto(añadirProducto)
        await nuevoProducto.save();
        res.json({
            status: "Producto guardado",
            data: nuevoProducto
        });
    }else{
        res.status(404).send('Producto Repetido');
    }
}

//Actualizar producto
productosControlador.putProducto = async (req,res) =>{
    const id = req.params.id;
    const actualizarProducto = {
        nombre: req.body.name,
        marca: req.body.brand,
        stock: req.body.stock,
        precio: req.body.price
    };
    console.log("Producto: " + JSON.stringify(actualizarProducto))
    await producto.findByIdAndUpdate(id,{$set: actualizarProducto}, {new: true});
    res.json({
        status:"Producto Actualizado",
        data: actualizarProducto
    })
}

//Eliminado logico de un producto
productosControlador.deleteProducto = async (req,res) =>{
    const id = req.params.id;
    console.log("ID: " + id);
    const eliminarProducto = {
        activo: false
    };
    await producto.findByIdAndUpdate(id,{$set: eliminarProducto}, {new: true});
    res.json({
        status:"Producto Eliminado",
        data: eliminarProducto
    })
}






module.exports = productosControlador;