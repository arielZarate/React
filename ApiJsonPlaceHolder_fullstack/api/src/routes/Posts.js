const express = require("express");
const router = express.Router();
const {
  postsAll,
  postsById,
  postCreate,
  postUpdate,
  postDelete,
} = require("../controllers/Posts");

router.get("/", postsAll);
router.get("/:id", postsById);
router.post("/", postCreate);
router.put("/:id", postUpdate);
router.delete("/:id", postDelete);

module.exports = router;
