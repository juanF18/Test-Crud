const express = require("express");
const router = express.Router();
const { getItems, getItem, createItem } = require("../controllers/tracks");

// generar la ruta de traks GET, POST, DELETE, PUT
router.get("/", getItems);
router.get("/:id", getItems);

router.post("/", createItem);

module.exports = router;
