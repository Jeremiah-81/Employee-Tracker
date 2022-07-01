INSERT INTO departments (dept_name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO roles (title, salary, department_id)
VALUES ("Salesperson", 80000, 1),
       ("Lead Engineer", 15000, 2),
       ("Software Engineer", 12000, 2),
       ("Account Manager", 16000, 2),
       ("Accountant", 125000, 2),
       ("Legal Team Lead", 25000, 2),
       ("Lawyer", 19000, 2);

INSERT INTO Employee (first_name, last_name, role_id, manager_id)
VALUES ("Samus", "Aran", 1, 1),
       ("Geordi", "LaForge", 2, null),
       ("Kaylee", "Frye", 2, 2),
       ("James", "Bond", 2, null),
       ("Bruce", "Wayne", 2, 2),
       ("Tony", "Stark", 2, null),
       ("Fletcher", "Reede", 2, 2),;
