const { URL_BASE } = process.env;
const Posts = require("../models/Posts");
const axios = require("axios");
var uuid = require("uuid-v4");

// Generate a new UUID

//const { uuid } = require("uuidv4");
/* NOTA SIEMPRE RESPETAR ESTE MODELO DE PRIMERO CREAR EL MAP Y LUEGO EL FOREACH . NO FUNCA SI LO HACES TODO JUNTO EN EL FOREACH */

const getApi = async () => {
  try {
    const info = await axios.get(`${URL_BASE}`);

    const array = info.data.map((e) => {
      let myUUID = uuid();
      return {
        userId: e.userId /* != undefined ? e.userId : UUIDV4 */,
        id: myUUID /* != undefined ? e.id : UUIDV4 */,
        title: e.title,
        body: e.body,
      };
    });

    console.log(array);
    /* create({
        userId: p.userId,
        id: p.id,
        title: p.title,
        body: p.body,
      }); */

    /*     array.forEach(async (p) => {
      await Posts.findOrCreate({
        where: {
          userId: p.userId,
          id: p.id,
          title: p.title,
          body: p.body,
        },
      });
    });
    console.log(
      `
    
       La base de datos ha sido cargada con los valores de la api con exito 🔥🔥🔥🔥

        🚀 @copyrigth by Ariel Zarate
    
       `
    ); */
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getApi };
