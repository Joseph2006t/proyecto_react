import * as ProductoModel from "../models/Producto.mjs";

export const createProducto = (req, res)=>{
    const dataProducto = req.body; // Datos del producto desde el cuerpo de la solicitud

    ProductoModel.crearProducto(dataProducto, (err,mensaje) => {
        if (err) {
            console.error('Error crear producto:', err);
            return res.status(500).json({ message: 'Error al crear producto' });
        }
        res.status(201).json(mensaje); // Devolvemos el producto creado
    });
}

export const updateProducto = (req, res)=>{
    const dataProducto = req.body; // Datos del producto desde el cuerpo de la solicitud

    ProductoModel.actualizarProducto(dataProducto, (err,mensaje) => {
        if (err) {
            console.error('Error al actualizar producto:', err);
            return res.status(500).json({ message: 'Error al actualizar producto' });
        }
        res.status(200).json(mensaje); // Devolvemos el producto creado
    });
}

export const getProductos=(req,res)=>{
    ProductoModel.traerProductos((err, productos)=>{
        if (err) {
            console.error('Error al traer productos:', err);
            return res.status(500).json({ message: 'Error al traer productos' });
        }
        res.status(200).json(productos); // Devolvemos los productos
    })
}

export const deleteProducto=(req, res)=>{
    const { idProducto } = req.query; // Obtenemos el id del producto desde la url

    ProductoModel.eliminarProducto(idProducto, (err, mensaje) => {
        if (err) {
            console.error('Error al eliminar producto:', err);
            return res.status(500).json({ message: 'Error al eliminar producto' });
        }
        res.status(200).json(mensaje); // Devolvemos el mensaje de eliminación
    });

}