import { Router } from 'express'
import { body } from 'express-validator'
import { createProduct, getProducts } from './handlers/product'
import { handleInputErrors } from './middleware'

const router = Router()

//Routing
router.get('/', getProducts)

router.post('/', 
    //Validacion
    body('name', 'El nombre es obligatorio').notEmpty(),
    body('price')
        .isNumeric().withMessage('Valor no valido')
        .notEmpty().withMessage('El precio no puede ir vacio')
        .custom( value => value > 0 ).withMessage('El precio no puede ser menor o igual a 0'),
    handleInputErrors,
    createProduct
)

router.put('/', (req, res) => {
    res.json("Desde PUT: ¡Hola, mundo! Esta es una API REST con Express y TypeScript.")
})

router.patch('/', (req, res) => {
    res.json("Desde PATCH: ¡Hola, mundo! Esta es una API REST con Express y TypeScript.")
})

router.delete('/', (req, res) => {
    res.json("Desde DELETE: ¡Hola, mundo! Esta es una API REST con Express y TypeScript.")
})

export default router