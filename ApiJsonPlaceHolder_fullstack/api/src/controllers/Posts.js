const { Op } = require("sequelize");
const Posts = require("../models/Posts");

//get all o por Title
const postsAll = async (req, res) => {
  try {
    const { title } = req.query;

    if (!title) {
      const posts = await Posts.findAll();

      posts
        ? res.status(200).json(posts)
        : res
            .status(404)
            .json({ message: "No se encuentras POSTS la base de datos" });
    } else {
      const postsByTitle = await Posts.findAll({
        where: {
          title: { [Op.iLike]: `%${title}%` },
        },
      });

      postsByTitle
        ? res.status(200).json(postsByTitle)
        : res
            .status(404)
            .json({ message: "No se encuentras ningun dato con ese titulo" });
    }
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

//=======ById=======
const postsById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      throw new Error(`id vacio verifique`);
    } else {
      const postByid = await Posts.findByPk(id);

      postByid
        ? res.json(postByid)
        : res.send("no se encuentra ningun elemento con ese id");
    }
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};

//======create======
const postCreate = async (req, res) => {
  try {
    const { title, body, userId } = req.body;

    if (!title || !body || !userId) {
      throw new Error("Algun parametro esta vacio.. falta completar");
    } else {
      const obj = await Posts.create({
        title,
        body,
        userId,
        createInDB: true,
      });

      return res.json(obj);
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

/*
UPDATE CON EL METODO UPDATE

const postUpdate = async (req, res) => {
  const { id } = req.params;
  //const { title, body, userId } = req.body;
  try {
    if (!id) {
      throw new Error("el id esta vacio o undefined");
    } else {
      const data = await Posts.update(req.body, {
        where: {
          id: req.params.id,
        },
      });

      return res.json(data);
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
}; */
const postUpdate = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("el id esta vacio o undefined");
    } else {
      const post = await Posts.findByPk(id);
      if (!post) {
        throw new Error("post no encontrado por id");
      } else {
        const { title, body, userId } = req.body;

        //actualizo con lo pasado en parametros
        if (title) post.title = title;
        if (body) post.body = body;
        if (userId) post.userId = userId;

        //res.json(activity);
        await post.save();
        res.json(post);
      }
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

const postDelete = async (req, res) => {
  const { id } = req.params;

  try {
    if (!id) {
      throw new Error("El id esta vacio  o undefined");
    } else {
      const post = await Posts.destroy(
        {
          where: { id: id },
        },
        {
          // paranoid: true,
          force: true,
        }
      );
      //  console.log(post);
      return res.json("El dato ha sido eliminado");
    }
  } catch (error) {
    return res.status(500).send({ error: error.message });
  }
};

module.exports = { postsAll, postsById, postCreate, postUpdate, postDelete };
