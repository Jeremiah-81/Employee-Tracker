const db = require("./connections")
const calls = {
    findallRoles(){
     return db.promise.query()
    }
}
module.exports = calls