const { storageModel } = require("../models");
/**
 * Contiene la logica que va a hacer uso el usuario
 * aca se crea control de Cread Read Update Delete
 * (get, put, post, delete,)
 *
 */

/**
 * Obtener lista de la base de datos
 * @param {*} req
 * @param {*} res
 */
async function getItems(req, res) {
  const data = await storageModel.find({});
  res.send({ data });
}
/**
 * Obtener un solo elemento
 * @param {*} req
 * @param {*} res
 */
async function getItem(req, res) {}
/**
 * Crea un registro en la base de datos
 * @param {*} req
 * @param {*} res
 */
async function createItem(req, res) {
  const { body, file } = req;
  console.log(body);
  const fileData = {
    filename: file.filename,
  };
  const data = await storageModel.create(body);
  res.send({ file });
}
/**
 * Obtiene un elemento y lo actualiza
 * @param {*} req
 * @param {*} res
 */
function updateItem(req, res) {}
/**
 * Elimina un registro
 * @param {*} req
 * @param {*} res
 */
function delteItem(req, res) {}

module.exports = { getItems, getItem, createItem, updateItem, delteItem };
