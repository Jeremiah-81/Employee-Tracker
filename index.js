const inquirer = require("inquirer");
const mysql2 = require("mysql2");

// Commented out: require("console.table");
// require("console.table");

// const db = require("./db")
const db = require ("./db/connections")
// mysql2.createConnection({
  // database: "employee_db",
// });
//--------------View Employees-------------//
function viewEmployees() {
  db.query("SELECT employee.id, employee.first_name, employee.last_name ,roles.title ,roles.salary FROM employee LEFT JOIN roles ON employee.roles_id = roles.id;",function (err, data) {
    console.log(data);
    console.table(data);
    if (err) throw err;
    initiate();
  })
  // db.query("SELECT * FROM employee", function (err, data) {
  //   if (err) throw err;(data);
  //   console.table(data);
    // commented out console.log(data);
    // console.log(data);
  //   initiate();
  // });
}

function viewDepartments() {
  // changed select to SELECT
  db.query("SELECT * from departments", function (err, data) {
    if (err) throw err;
    console.table(data);
    initiate();
  });
}

function viewrole() {
  console.log("roles")

  // from: return db.promise().query("SELECT * from roles").then( ([data]) => { 
  // TO: db.query("SELECT * from roles", function (err, data) {
  db.query("SELECT * from roles", function (err, data) {
  
    // uncommented if (err) throw err;
  if (err) throw err;

    console.table(data);

    // uncommented initiate();
    initiate();

    // commented out return(data);
    // return(data);
  });
}

function addDepartment() {
  console.log("department")
  db.query("SELECT * FROM departments", function (err, data) {
    if (err) throw err;
    console.log(data);
    
    // added line: console.table(data);
    console.table(data);

    initiate();
  });
}

function addrole() {
  console.log("roles")
  db.query("SELECT * FROM roles", function (err, data) {
    if (err) throw err;
    console.log(data);

     // added line: console.table(data);
    console.table(data);
    
    initiate();
  });
}

// function addEmployee() {
//   db.query("SELECT * FROM employee", function (err, data) {
//     if (err) throw err;
//     console.log(data);
//     initiate();
//   });
// }

function updateemployeeroles() {
  db.query("SELECT * FROM update employee role", function (err, data) {
    if (err) throw err;
    console.log(data);
    initiate();
  });
}

//Add new employee
function addEmployee() {
  console.log("Employees")
  viewrole().then(roles => {
    const userRoleChoice = roles.map(({ title: name, id: value }) => ({
      name,
      value,
    }));
    console.log (userRoleChoice)
    inquirer
      .prompt([
        {
          name: "firstName",
          type: "input",
          message: "Please enter the employee's first name:",
        },
        {
          name: "lastName",
          type: "input",
          message: "Please enter the employee's last name:",
        },
        {
          name: "employeeRole",
          type: "list",
          message: "Please select the employee's job role:",
          choices: userRoleChoice,
        },
        {
          name: "employeesManager",
          type: "input",
          message: "Please enter the name of this employee's manager. If none, type N/A :",
        },
      ])
      .then((answer) => {
        connection.query(
          "INSERT INTO employee SET ?",
          {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.employeeRole,
            manager_name: answer.employeesManager,
          },
          (err) => {
            if (err) throw err;
            console.log("\n");
            console.log("New Employee Added.");
            console.log("\n");
            initiate();
          });
        ;
      });
    })
}
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
          "Exit App",
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
        case "update employee role":
          updateemployeeroles();
          break;
        default:
          db.end();
          process.exit(0);
      }
      // userView === ("View employees"){
      //     viewEmployees();
      // }
    });
}

db.connect(function () {
  console.log("Welcome to Employee Tracker");
  initiate();
});











////-------------comments below-------------theories and attempts for thought. ----------------------------------------////


// const inquirer = require("inquirer");
// const mysql2 = require("mysql2");
// require("console.table");
// const db = mysql2.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "thepassword!",
//   database: "employee_db",
// });

// //--------------View Employees-------------//
// function viewEmployees() {
//   db.query("SELECT * FROM employee", function (err, data) {
//     if (err) throw err;
//     console.log(data);
//     initiate();
//   });
// }

// function viewDepartments() {
//   db.query("select * from departments", function (err, data) {
//     if (err) throw err;
//     console.log(data);
//     initiate();
//   });
// }

// function viewrole() {
//   db.query("select * from roles", function (err, data) {
//     if (err) throw err;
//     console.log(data);
//     initiate();
//   });
// }

// This is the join left method I tried to ues.

// SELECT column_name(s)
// FROM table1
// LEFT JOIN table2
// ON table1.column_name = table2.column_name;