const file = require("../functions/file")
class Controller {
    async getAll(req,res){
        const nodes = file.readJSON("nodes.json")
        return res.send(nodes)
    }
    async get(req,res){
        const nodes = file.readJSON("nodes.json")
        return res.send(nodes[req.params.id])
    }
    async create(req,res){
        return res.send(true)
    }
    async delete(req,res){
        return res.send(true)
    }
}

module.exports= new Controller()