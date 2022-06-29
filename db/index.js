const db = require("./connections")
const calls = {
    findallRoles(){
     return db.promice.query()
    }
}
module.exports = calls