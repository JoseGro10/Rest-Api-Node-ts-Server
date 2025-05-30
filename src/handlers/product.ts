import { Request, Response } from 'express'
import Product from '../models/Product.model'

export const getProducts = async (req: Request, res: Response) => {
    try{
        const products = await Product.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        res.json({data: products, message: 'Productos obtenidos exitosamente'})
    }catch(error){
        console.log(error)
    }
    res.send('¡Hola, mundo! Esta es una API REST con Express y TypeScript.') 
}

export const createProduct = async (req: Request, res : Response) => {
    try{
        const product = await Product.create(req.body)
    res.json({data: product, message: 'Producto creado exitosamente'})
    }catch (error) {
        console.error('Error al crear el producto:', error)
    }
}