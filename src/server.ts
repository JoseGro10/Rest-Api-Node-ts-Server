import express from 'express'
import colors from 'colors'
import router from './router'
import db from './conifg/db'

//Conectar a base de datos
async function connectDB(){
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.bgGreen.black.bold('Conexión a la base de datos exitosaa'))
    }catch (error){
        console.log(colors.bgRed.white('Error al conectar a la base de datos: '))
        console.log(error)
    }
}
connectDB()

const server = express()

server.use('/api/productos', router)

export default server