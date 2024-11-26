const express = require("express");
const additionsController = require("../controllers/additionsController.js");
const additionsRouter = express.Router();
additionsRouter.get('/', additionsController.getAll)
additionsRouter.get('/:id', additionsController.get)
additionsRouter.post('/', additionsController.create)
additionsRouter.delete('/:id', additionsController.delete)

module.exports = additionsRouter;