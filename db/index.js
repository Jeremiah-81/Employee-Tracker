const db = require("./connections")
const calls = {
    findallRoles(){
     return db.promise.query()
    }
}
const depts = {
    findalldepartments(){
     return db.promise.query()
    }
}
const emps = {
    findallemployees(){
     return db.promise.query()
    }
}
module.exports = calls, depts, emps