const express = require("express");
const rulesController = require("../controllers/rulesController.js");
const rulesRouter = express.Router();
rulesRouter.get('/', rulesController.getAll)
rulesRouter.get('/:id', rulesController.get)
rulesRouter.post('/', rulesController.create)
rulesRouter.delete('/:id', rulesController.delete)

module.exports = rulesRouter;