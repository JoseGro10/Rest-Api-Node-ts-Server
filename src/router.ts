import { Router } from 'express'
import { body, param } from 'express-validator'
import { createProduct, getProductById, getProducts, updateAvailability, updateProduct } from './handlers/product'
import { handleInputErrors } from './middleware'

const router = Router()

//Routing
router.get('/',
    param('id').isInt().withMessage('El id debe ser un número entero'), 
    handleInputErrors,
    getProducts) 
router.get('/:id', getProductById)


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

router.put('/:id', updateProduct)

router.patch('/:id', updateAvailability)

router.delete('/', (req, res) => {
    res.json("Desde DELETE: ¡Hola, mundo! Esta es una API REST con Express y TypeScript.")
})

export default router