import express from 'express'

const server = express()

//Routing
server.get('/', (req, rs) => {
    rs.send('¡Hola, mundo! Esta es una API REST con Express y TypeScript.') 
})

server.post('/', (req, res) => {
    res.json("Desde POST: ¡Hola, mundo! Esta es una API REST con Express y TypeScript.")
})

server.put('/', (req, res) => {
    res.json("Desde PUT: ¡Hola, mundo! Esta es una API REST con Express y TypeScript.")
})

server.patch('/', (req, res) => {
    res.json("Desde PATCH: ¡Hola, mundo! Esta es una API REST con Express y TypeScript.")
})

server.delete('/', (req, res) => {
    res.json("Desde DELETE: ¡Hola, mundo! Esta es una API REST con Express y TypeScript.")
})

export default server