const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = file.split(".").shift();
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
