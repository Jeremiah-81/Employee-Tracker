const inquirer = require("inquirer");
const mysql2 = require("mysql2");
require("console.table");
const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "thepassword!",
  database: "employee_db"
})


//--------------View Employees-------------//
function viewEmployees() {

  db.query("SELECT * FROM employee", function (err,data) {
    if (err) throw err;
    console.log(data)
    initiate()
  })
}

function viewDepartments() {

  db.query("select * from departments", function (err,data) {
    if (err) throw err;
    console.log(data)
    initiate()
  })
}

function viewrole() {

  db.query("select * from roles", function (err,data) {
    if (err) throw err;
    console.log(data)
    initiate()
  })
}

function addDepartment() {

  db.query("SELECT * FROM add department", function (err,data) {
    if (err) throw err;
    console.log(data)
    initiate()
  })
}


function addrole() {

  db.query("SELECT * FROM add role", function (err,data) {
    if (err) throw err;
    console.log(data)
    initiate()
  })
}

function addEmployee() {

  db.query("SELECT * FROM add employee", function (err,data) {
    if (err) throw err;
    console.log(data)
    initiate()
  })
}

function updateemployeeroles() {

  db.query("SELECT * FROM update employee roles", function (err,data) {
    if (err) throw err;
    console.log(data)
    initiate()
  })
}

// //Add new employee
// function addEmployee() {
//   readRoles().then((roles) => {
//     const userRoleChoice = roles.map(({ title: name, id: value }) => ({
//       name,
//       value,
//     }));
//     inquirer
//       .prompt([
//         {
//           name: "firstName",
//           type: "input",
//           message: "Please enter the employee's first name:",
//         },
//         {
//           name: "lastName",
//           type: "input",
//           message: "Please enter the employee's last name:",
//         },
//         {
//           name: "employeeRole",
//           type: "list",
//           message: "Please select the employee's job role:",
//           choices: userRoleChoice,
//         },
//         {
//           name: "employeesManager",
//           type: "input",
//           message: "Please enter the name of this employee's manager. If none, type N/A :",
//         },
//       ])
//       .then((answer) => {
//         connection.query(
//           "INSERT INTO employee SET ?",
//           {
//             first_name: answer.firstName,
//             last_name: answer.lastName,
//             role_id: answer.employeeRole,
//             manager_name: answer.employeesManager,
//           },
//           (err) => {
//             if (err) throw err;
//             console.log("\n");
//             console.log("New Employee Added.");
//             console.log("\n");
//             initiate();
//           }
//         );
//       });
//   });
// }
function initiate() {
  inquirer
    .prompt([
      {
        name: "employeeInfo",
        type: "list",
        message: "Employees Tracker",
        choices: [
          "view employees",
          "view departments",
          "view roles",
          "add department",
          "add role",
          "add employee",
          "update employee roles",
          "Exit App"
        ],
      },
    ])
    .then((data) => {
      console.log(data);

      switch (data.employeeInfo) {
        case "view employees":
          viewEmployees();
          break;
        case "view departments":
          viewDepartments();
          break;
        case "view roles":
          viewrole();
          break;
        case "add department":
          addDepartment();
          break;
        case "add role":
          addrole();
          break;
        case "add employee":
          addEmployee();
          break;
        case "update employee roles":
          updateemployeeroles();
          break;
        default:
          db.end()
          process.exit(0)
      }
      // userView === ("View employees"){
      //     viewEmployees();
      // }
    });
}

db.connect(function () {
  console.log("Welcome to Employee Tracker")
  initiate();
})
