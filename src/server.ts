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

//Instancia de express
const server = express()

//Leer datos de formularios
server.use(express.json())

server.use('/api/products', router)

export default server