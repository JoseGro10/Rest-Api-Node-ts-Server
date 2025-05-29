import { Request, Response } from 'express'
import { check, validationResult } from 'express-validator'
import Product from '../models/Product.model'

export const createProduct = async (req: Request, res : Response) => {

    //Validacion
    await check('name', 'El nombre es obligatorio').notEmpty().run(req)
    await check('price')
        .isNumeric().withMessage('Valor no valido')
        .notEmpty().withMessage('El precio no puede ir vacio')
        .custom( value => value > 0 ).withMessage('El precio no puede ser menor o igual a 0')
        .run(req)

    let errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const product = await Product.create(req.body)
    res.json({data: product, message: 'Producto creado exitosamente'})
}