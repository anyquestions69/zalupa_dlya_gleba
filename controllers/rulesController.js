const file = require("../functions/file")
class Controller {
    async getAll(req,res){
        const rules = file.readJSON("rules.json")
        let i =0
        let obj = new Object()
        for(let prefix in rules){
            for(let id in rules[prefix]){
                for(let suffix in rules[prefix][id]){  
                    obj[i]=[prefix, id, suffix, rules[prefix][id][suffix]]
                    i++
                }
            }
        }
        return res.send(obj)
    }
    async get(req,res){
        const rules = file.readJSON("rules.json")
        let i =0
        let obj = new Object()
        for(let prefix in rules){
            for(let id in rules[prefix]){
                for(let suffix in rules[prefix][id]){  
                    obj[i]=[prefix, id, suffix, rules[prefix][id][suffix]]
                    i++
                }
            }
        }
        return res.send(obj[req.params.id])
    }
    async create(req,res){
        const rules = file.readJSON("rules.json")
        const add = req.body
        console.log(req.body)
        const prefix = Object.keys(add)[0]
        const id = Object.keys(add[prefix])[0]
        const suffix = Object.keys(add[prefix][id])[0]
        if(rules[prefix]){
            if(rules[prefix][id]){
                rules[prefix][id][suffix] = add[prefix][id][suffix]
            }else{
                rules[prefix][id] = add[prefix][id]
            }
        }else{
            rules[prefix]=add[prefix]
        }
        file.update("rules.json", rules)
        return res.send(rules)
    }
    async delete(req,res){
        const rules = file.readJSON("rules.json")
        let i =0
        let obj = new Object()
        for(let prefix in rules){
            for(let id in rules[prefix]){
                for(let suffix in rules[prefix][id]){  
                    obj[i]=[prefix, id, suffix, rules[prefix][id][suffix]]
                    i++
                }
            }
        }
        console.log(rules[obj[req.params.id][0]][obj[req.params.id][1]][obj[req.params.id][2]])
        const deleted = rules[obj[req.params.id][0]][obj[req.params.id][1]][obj[req.params.id][2]]
        delete rules[obj[req.params.id][0]][obj[req.params.id][1]][obj[req.params.id][2]]
        file.update("rules.json", rules)
        return res.send(deleted)
    }
}

module.exports= new Controller()