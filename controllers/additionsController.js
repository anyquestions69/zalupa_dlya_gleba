const file = require("../functions/file")
class Controller {
    async getAll(req,res){
        const nodes = file.readJSON("nodes.json")
        const obj={}
        nodes.forEach((element,index) => {
            obj[index]=element
        });
        return res.send(obj)
    }
    async get(req,res){
        const nodes = file.readJSON("nodes.json")
        const obj={}
        nodes.forEach((element,index) => {
            obj[index]=element
        });
        return res.send(obj[req.params.id])
    }
    async create(req,res){
        const nodes = file.readJSON("nodes.json")
        nodes.push(req.body)
        file.update("nodes.json", nodes)
        const obj={}
        nodes.forEach((element,index) => {
            obj[index]=element
        });
        return res.send(obj)
    }
    async delete(req,res){
        const nodes = file.readJSON("nodes.json")
        nodes.splice(req.params.id, 1);
        file.update("nodes.json", nodes)
        const obj={}
        nodes.forEach((element,index) => {
            obj[index]=element
        });
        return res.send(obj)
    }
}

module.exports= new Controller()