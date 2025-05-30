import { Request, Response } from 'express'
import Product from '../models/Product.model'

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['id', 'DESC']
            ]
        })
        res.json({ data: products, message: 'Productos obtenidos exitosamente' })
    } catch (error) {
        console.log(error)
    }
    res.send('¡Hola, mundo! Esta es una API REST con Express y TypeScript.')
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' })
        }
        res.json({ data: product, message: 'Producto obtenido exitosamente' })
    } catch (error) {
        console.log(error)
    }
    res.send('¡Hola, mundo! Esta es una API REST con Express y TypeScript.')
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product = await Product.create(req.body)
        res.json({ data: product, message: 'Producto creado exitosamente' })
    } catch (error) {
        console.error('Error al crear el producto:', error)
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' })
    }

    //Actualizar
    await product.update(req.body)
    await product.save()

    res.json({ data: product, message: 'Producto actualizado exitosamente' })

}

export const updateAvailability = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' })
    }

    //Actualizar
    product.availability = req.body.availability
    await product.save()

    res.json({ data: product, message: 'Producto actualizado exitosamente' })
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' })
    }

    await product.destroy()
    res.json({ message: 'Producto eliminado exitosamente' })

}