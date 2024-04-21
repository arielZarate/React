const server = require("../src/app.js");
const { sequelize } = require("../src/db.js");
const { PORT, DB_NAME, URL_BASE, FORZAR_DB } = process.env;
const { getApi } = require("../src/services/consumir_api.js");

//DECLARAMOS PUERTO EN .ENV

const generateServidor = async () => {
  try {
    await sequelize.authenticate();
    server.listen(PORT, () => {
      console.log(
        `
       ================= Proyecto basado en la api de json placeholder==========================
       Link de la pagina oficial :https://jsonplaceholder.typicode.com/
       Link de la guia https://jsonplaceholder.typicode.com/guide/
       Link para consumir la api ${URL_BASE}

        Connection has been established successfully on port ${PORT} in db del proyecto ${DB_NAME} 🍻🍻🍻🍻🍻🥂🥂🥂
        
        `
      );
    });

    /* CONFIGURACION DE LA BD EN FALSE PARA QUE LOS DATOS NO SE ELIMINEN AL REINICIAR  */
    sequelize.sync({ force: FORZAR_DB });

    //llamo al metodo apenas se crea el server
    getApi();
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};

generateServidor();
