const inquirer = require("inquirer");
const mysql2 = require("mysql2");
const consoleTable = require("console.table");



//--------------View Employees-------------//
function viewEmployees(){
    inquirer
        .prompt([
            {
                name: "employeeInfo",
                type: "employees", 
            }
        ]).then((data) => {
            console.log(data)
            // userView === ("View employees"){
            //     viewEmployees();
            // }
        }) 
       
    }

//Add new employee
function addEmployee(){
    readRoles().then(roles => {
        const userRoleChoice = roles.map(({title: name, id: value}) => ({name, value}));
        inquirer
        .prompt([
            {
                name: "firstName",
                type: "input",
                message: "Please enter the employee's first name:"
            },
            {
                name: "lastName",
                type: "input",
                message: "Please enter the employee's last name:"
            },
            {
                name: "employeeRole",
                type: "list",
                message: "Please select the employee's job role:",
                choices: userRoleChoice
            },
            {
                name: "employeesManager",
                type: "input",
                message: "Please enter the name of this employee's manager. If none, type N/A :",
            }
        ])
        .then(answer => {
            connection.query(
                "INSERT INTO employee SET ?",
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.employeeRole,
                    manager_name: answer.employeesManager

                },
                (err => {
                    if (err) throw err;
                    console.log("\n");
                    console.log("New Employee Added.")
                    console.log("\n");
                    initiate();
                })
            )
            })
    })
}
function initiate() {
    viewEmployees()
}
initiate()