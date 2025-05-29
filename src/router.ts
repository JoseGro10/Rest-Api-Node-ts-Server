import { Router } from 'express'
import { createProduct } from './handlers/product'

const router = Router()

//Routing
router.get('/', (req, rs) => {
    rs.send('¡Hola, mundo! Esta es una API REST con Express y TypeScript.') 
})

router.post('/', createProduct)

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