# REST API Node TypeScript Server

Este proyecto es una API REST construida con **Node.js**, **Express** y **TypeScript**. Utiliza **Sequelize** para la gestión de la base de datos y **dotenv** para la configuración de variables de entorno.

## Tecnologías utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)
- [Sequelize Typescript](https://sequelize.org/master/manual/typescript.html)
- [dotenv](https://github.com/motdotla/dotenv)
- [colors](https://www.npmjs.com/package/colors)
- [express-validator](https://express-validator.github.io/)
- [pg](https://www.npmjs.com/package/pg) y [pg-hstore](https://www.npmjs.com/package/pg-hstore) para PostgreSQL

## Scripts disponibles

- `npm run dev`: Inicia el servidor en modo desarrollo con nodemon y ts-node.

## Estructura del proyecto

```
src/
  ├── config/
  ├── models/
  ├── router.ts
  ├── server.ts
  └── index.ts
```

## Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con la siguiente variable:

```
DATABASE_URL=tu_url_de_base_de_datos
```

## Ramas existentes

- **main**: Rama principal con el código estable.
- **dev**: Rama de desarrollo (si existe).
- (Agrega aquí otras ramas que tengas en tu repositorio)

## Cómo ejecutar el proyecto

1. Instala las dependencias:
   ```
   npm install
   ```
2. Configura las variables de entorno en `.env`.
3. Inicia el servidor:
   ```
   npm run dev
   ```

---

