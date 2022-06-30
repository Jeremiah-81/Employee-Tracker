- Initialize and Configure Database
DROP DATABASE IF EXISTS employee_db;
CREATE database employee_db;

-- Allow employee_db to utilize and perform SQL. 
USE employee_db;

--  Make a table called department.
CREATE TABLE departments (

    -- Make a unique id for each item in the table.  Not null means data area can't be empty.
    id INT NOT NULL AUTO_INCREMENT,
    
    -- Allow the dept_name a max of 30 characters.  Not null means data area can't be empty.
    dept_name VARCHAR(30) NOT NULL,

    --  Make id the primary key to identify the items in the table.  
    PRIMARY KEY (id)
);

-- Make a table called roles.
create table roles (

    -- Make unique id for each of the items
    id INT NOT NULL AUTO_INCREMENT,

    -- Max length of 30 characters. Not null means data area can't be empty.
    title VARCHAR(30) NOT NULL,

    -- Allow decimal numbers as input inside the table.  Not null means data area can't be empty.
    salary DECIMAL NOT NULL,

    -- Allow the department_id to accept only integers.  Not null means data area can't be empty.
    department_id INT NOT NULL,

    -- Make id the primary key to identify the items in this table.  
    PRIMARY KEY (id)

);

-- Make a table called employees.
CREATE TABLE employee (

    -- Make a unique id for each item in the table.  Not null means data area can't be empty.
    id INT NOT NULL AUTO_INCREMENT,

    -- Allow the first_name a max of 30 characters.  Not null means data area can't be empty.
    first_name VARCHAR(30) NOT NULL,

    -- Allow the last_name a max of 30 characters.  Not null means data area can't be empty.
    last_name VARCHAR(30) NULL,
    
    -- Allow only integers inside role-id. Not null means data area can't be empty.
    role_id INT NOT NULL,

    -- Allow only integers inside manager-id. Not null means data area can't be empty.
    manager_id INT NOT NULL,
    
    -- Make id the primary key to identify the items in this table.  
    PRIMARY KEY (id)

);
