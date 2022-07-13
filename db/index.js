const db = require("./connections")
const calls = {
    findallRoles(){
     return db.promise.query()
    }
}
const departments = {
    findalldepartments(){
     return db.promise.query()
    }
}
const employees = {
    findallemployees(){
     return db.promise.query()
    }
}
module.exports = calls, departments, employees