import inquirer from 'inquirer';
import {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
} from './queries';

const mainMenu = async () => {
  const { action } = await inquirer.prompt([
    {
      type: 'list',
      name: 'action',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    },
  ]);

  switch (action) {
    case 'View all departments':
      const departments = await getDepartments();
      console.table(departments);
      break;
    case 'View all roles':
      const roles = await getRoles();
      console.table(roles);
      break;
    case 'View all employees':
      const employees = await getEmployees();
      console.table(employees);
      break;
    case 'Add a department':
      const { departmentName } = await inquirer.prompt([
        {
          type: 'input',
          name: 'departmentName',
          message: 'Enter the name of the department:',
        },
      ]);
      await addDepartment(departmentName);
      console.log(`Added department: ${departmentName}`);
      break;
    case 'Add a role':
      const { roleTitle, roleSalary, roleDepartmentId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'roleTitle',
          message: 'Enter the title of the role:',
        },
        {
          type: 'input',
          name: 'roleSalary',
          message: 'Enter the salary of the role:',
        },
        {
          type: 'input',
          name: 'roleDepartmentId',
          message: 'Enter the department ID for the role:',
        },
      ]);
      await addRole(roleTitle, roleSalary, roleDepartmentId);
      console.log(`Added role: ${roleTitle}`);
      break;
    case 'Add an employee':
      const { firstName, lastName, roleId, managerId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'firstName',
          message: 'Enter the first name of the employee:',
        },
        {
          type: 'input',
          name: 'lastName',
          message: 'Enter the last name of the employee:',
        },
        {
          type: 'input',
          name: 'roleId',
          message: 'Enter the role ID for the employee:',
        },
        {
          type: 'input',
          name: 'managerId',
          message: 'Enter the manager ID for the employee (leave blank if none):',
        },
      ]);
      await addEmployee(firstName, lastName, roleId, managerId || null);
      console.log(`Added employee: ${firstName} ${lastName}`);
      break;
    case 'Update an employee role':
      const { employeeId, newRoleId } = await inquirer.prompt([
        {
          type: 'input',
          name: 'employeeId',
          message: 'Enter the ID of the employee to update:',
        },
        {
          type: 'input',
          name: 'newRoleId',
          message: 'Enter the new role ID for the employee:',
        },
      ]);
      await updateEmployeeRole(employeeId, newRoleId);
      console.log(`Updated employee ID ${employeeId} to role ID ${newRoleId}`);
      break;
    case 'Exit':
      console.log('Goodbye!');
      process.exit();
  }

  mainMenu();
};

mainMenu();