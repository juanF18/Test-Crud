const express = require("express");
const fs = require("fs");
const router = express.Router();

const PATH_ROUTES = __dirname;

/**
 * Carga todos los archivos en esta ruta
 * y lo que hace es sacar los archivos que
 * hay en la ruta, y lo que hace es extraer
 * el nombre del archivo sin la extencion
 * y asignarlo como ruta (asi esta predefinido
 * para el uso del api)
 */
const a = fs.readdirSync(PATH_ROUTES).filter((file) => {
  const name = file.split(".").shift();
  if (name !== "index") {
    router.use(`/${name}`, require(`./${file}`));
  }
});

module.exports = router;
