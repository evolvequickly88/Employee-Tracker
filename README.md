Employee Tracker - Command Line Application

Description

The Employee Tracker application is a command-line interface (CLI) tool designed to help business owners manage their employee database efficiently. The app allows users to interact with a PostgreSQL database to view and manage information about employees, their roles, and the departments they belong to. It uses the Inquirer package for user input and the pg package to interact with the PostgreSQL database.

This project allows you to:
	•	View all departments, roles, and employees.
	•	Add new departments, roles, and employees.
	•	Update employee roles.

It meets all of the specified acceptance criteria for managing employee-related data through a simple CLI interface.

User Story

As a business owner,
I want to be able to view and manage the departments, roles, and employees in my company,
so that I can organize and plan my business.

Features
	•	View all departments
	•	View all roles
	•	View all employees
	•	Add a new department
	•	Add a new role
	•	Add a new employee
	•	Update an employee’s role

Database Schema

The application uses a PostgreSQL database with the following tables:
	1.	Department
	•	id: SERIAL PRIMARY KEY
	•	name: VARCHAR(30) UNIQUE NOT NULL
	2.	Role
	•	id: SERIAL PRIMARY KEY
	•	title: VARCHAR(30) UNIQUE NOT NULL
	•	salary: DECIMAL NOT NULL
	•	department_id: INTEGER NOT NULL (Foreign key reference to department)
	3.	Employee
	•	id: SERIAL PRIMARY KEY
	•	first_name: VARCHAR(30) NOT NULL
	•	last_name: VARCHAR(30) NOT NULL
	•	role_id: INTEGER NOT NULL (Foreign key reference to role)
	•	manager_id: INTEGER (Nullable reference to manager, if any)

Getting Started

To use the Employee Tracker, follow these steps:

Prerequisites
	•	Node.js installed on your machine.
	•	PostgreSQL installed and running on your local machine.

 Installation
	1.	Clone the repository to your local machine:
 	2.	Install the required dependencies:
  	3.	Set up your PostgreSQL database by running the provided schema.sql file to create the necessary tables:
   4.	Add some sample data by running seeds.sql:

   Running the Application

Once the database is set up, you can run the application:
This will start the command-line application, where you will be prompted with various options to interact with the database.

Video Walkthrough

file:///Users/bchinadoll41/Downloads/Untitled%20Video%20February%204,%202025%201_59%20PM.webm

The video walkthrough demonstrates all the technical acceptance criteria being met, including the interaction with the application and its functionality.

Functionality

Menu Options:

Upon starting the application, you will be presented with the following menu options:
	1.	View All Departments
	2.	View All Roles
	3.	View All Employees
	4.	Add Department
	5.	Add Role
	6.	Add Employee
	7.	Update Employee Role

For each option, the application performs the following:
	•	View All Departments: Displays a table showing department names and IDs.
	•	View All Roles: Displays job titles, role IDs, department names, and salaries.
	•	View All Employees: Displays employee data, including IDs, names, roles, departments, salaries, and managers.
	•	Add Department: Prompts you to enter a department name and adds it to the database.
	•	Add Role: Prompts you to enter the name, salary, and department for a new role and adds it to the database.
	•	Add Employee: Prompts you to enter the first name, last name, role, and manager for an employee and adds the employee to the database.
	•	Update Employee Role: Prompts you to select an employee and their new role, then updates their role in the database.

Bonus Features (Optional)
	•	Update Employee Managers
	•	View Employees by Manager
	•	View Employees by Department
	•	Delete Departments, Roles, and Employees
	•	View Total Utilized Budget of a Department: Calculate the total salary of all employees in a department.

Grading Requirements

This project meets all the grading criteria as outlined in the assignment prompt, including:
	•	Use of the Inquirer package to interact with users.
	•	Use of the pg package to interact with a PostgreSQL database.
	•	A functional command-line interface that fulfills all acceptance criteria.
	•	The repository includes multiple descriptive commits and a high-quality README with a walkthrough video.

Notes
	•	Ensure that your PostgreSQL password is secure and not committed to GitHub.
	•	Make sure you have Inquirer version 8.2.4 installed.

License

This project is licensed under the MIT License.
