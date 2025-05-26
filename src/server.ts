import express from 'express'

const server = express()

//Routing
server.get('/', (req, rs) => {
    rs.send('¡Hola, mundo! Esta es una API REST con Express y TypeScript.') 
})

export default server