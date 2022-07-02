USE employee_db;
INSERT INTO departments (dept_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", 80000, 1),
       ("Lead Engineer", 15000, 2),
       ("Software Engineer", 12000, 2),
       ("Account Manager", 16000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 25000, 4),
       ("Lawyer", 19000, 4);

INSERT INTO Employee (first_name, last_name, roles_id, manager_id)
VALUES ("Samus", "Aran", 1, null),
       ("Geordi", "LaForge", 2, null),
       ("Kaylee", "Frye", 2, 2),
       ("James", "Bond", 2, null),
       ("Bruce", "Wayne", 2, 1),
       ("Tony", "Stark", 2, null),
       ("Fletcher", "Reede", 2, 2);
