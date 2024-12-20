const {readFileSync, writeFileSync} = require("fs")
class Manager{
     readJSON(filename){
        try {
            let obj = JSON.parse(readFileSync(__dirname+'/../data/'+filename, 'utf8'));
            
            return obj
          } catch (e) {
            console.warn(e)
            return null
          }
    }
    update(filename, object){
        try {
            
            let obj = writeFileSync(__dirname+'/../data/'+filename, JSON.stringify(object))
            return obj
          } catch (e) {
            console.warn(e)
            return null
          }
    }
}
function flattenObject(obj) {
  let index = 1;
  const flattened = [];

  function recursiveFlatten(obj, prefix = '') {
    for (let key in obj) {
      let newKey = prefix ? `${prefix}.${key}` : key;
      
      if (typeof obj[key] === 'object') {
        recursiveFlatten(obj[key], newKey);
      } else {
        flattened.push([index++, newKey.split('.'), obj[key]]);
      }
    }
  }

  recursiveFlatten(obj);
  
  return Object.fromEntries(flattened);
}
module.exports=new Manager()