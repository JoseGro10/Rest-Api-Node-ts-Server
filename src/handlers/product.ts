import { Request, Response } from 'express'
import Product from '../models/Product.model'

export const createProduct = async (req: Request, res : Response) => {
    try{
        const product = await Product.create(req.body)
    res.json({data: product, message: 'Producto creado exitosamente'})
    }catch (error) {
        console.error('Error al crear el producto:', error)
    }
}