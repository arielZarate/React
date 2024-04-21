# PROYECTO CRUD CON LA API JSONPLACEHOLDER

## TECNOLOGIAS USADAS

- POSTGRESS
- SEQUELIZE
- NODEJS
- REACT
- BOOTSTRAP

## URL POSTS

- GET https://jsonplaceholder.typicode.com/posts
- GET https://jsonplaceholder.typicode.com/users/1/posts "no se usa"

#### Nota:la api original trae solo 100 posts

# RUTAS

- GET posts/ --all
- GET posts/?title -- by title
- GET posts/id --ByID
- PUT posts/id --update
- DELETE posts/id --delete
- POST posts/ --create

# DEPENDENCIAS

## postgres

- Se debe instalar postgress o algun entorno en consola para poder crear una bd

## backend node js

- "axios": "^1.2.3",
- "cors": "^2.8.5",
- "dotenv": "^16.0.3",
- "express": "^4.18.2",
- "morgan": "^1.10.0",
- "nodemon": "^2.0.20",
- "pg": "^8.8.0",
- "pg-hstore": "^2.3.4",

* "sequelize": "^6.28.0",

- "uuid-v4": "^0.1.0"

## front Reactjs & Redux

- "bootstrap": "^5.2.3",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-redux": "^8.0.5",
- "react-router-dom": "^5.3.4",
- "redux": "^4.2.0",
- "redux-thunk": "^2.4.2"

## vite

- https://vitejs.dev/
- npm create vite@latest
- @vite(otro generador de proyectos al igual que create-react-app )

## FONT AWESOME (ICONOS)

- https://fontawesome.com/icons

## FONDOS DE PEXELS

- https://www.pexels.com/es-es/

## BOOTSTRAPS

- https://getbootstrap.com/

# EJECUCION DEL PROYECTO

## api : npm run dev

## client: npm run dev

- nota: se puede modifcar lo que se quiera en el package.json de cada repositorio
- Recordar realizar sus npm i para instalar las dependencias en el node_modules

# En el backend

- crear una base de datos con el nombre de "jsonPlaceHolder" o el nombre que ud desee pero si lo cambia debera cambiar el nombre en el archivo db.js ya que ese archivo realiza la conexion a la bd con el ORM sequelize

* Se debe configurar el archivo ".env" que esta en el directorio raiz,debe tener instalado dotenv
* El servidor esta en una carpeta llamada bin y dentro de el esta archivo.js

# api/bin/server.js

- Dentro de este archivo se recibe una instancia de sequelize para ejecutar la bd y se inicia la carga de la bd desde el services/consumir_api.js
- En este archivo esta sequelize.sync({ force: FORZAR_DB }). la variable Forzar_DB es booleana true/false y se encueentra en el .env confifurada. Solo debe configurar ese archivo si desea modificar algo . 😁

# .env

### Ejemplo de como esta estruturado el archivo

- DB_USER=debe poner nombre de usuario de la db
- DB_PASSWORD= debe poner su clave
- DB_HOST= debe escribir su host
- DB_NAME= debe poner el nombre de la bd
- PORT=3001

* FORZAR_DB=false

* URL_BASE=https://jsonplaceholder.typicode.com/posts

### vea como el archivo db.js importa estos valores y los usa

# thunderClient

- se encuentra un archivo en el proyecto para inportar todoas las request echas .
