"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const queries_1 = require("./queries");
const mainMenu = () => __awaiter(void 0, void 0, void 0, function* () {
    const { action } = yield inquirer_1.default.prompt([
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
            const departments = yield (0, queries_1.getDepartments)();
            console.table(departments);
            break;
        case 'View all roles':
            const roles = yield (0, queries_1.getRoles)();
            console.table(roles);
            break;
        case 'View all employees':
            const employees = yield (0, queries_1.getEmployees)();
            console.table(employees);
            break;
        case 'Add a department':
            const { departmentName } = yield inquirer_1.default.prompt([
                {
                    type: 'input',
                    name: 'departmentName',
                    message: 'Enter the name of the department:',
                },
            ]);
            yield (0, queries_1.addDepartment)(departmentName);
            console.log(`Added department: ${departmentName}`);
            break;
        case 'Add a role':
            const { roleTitle, roleSalary, roleDepartmentId } = yield inquirer_1.default.prompt([
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
            yield (0, queries_1.addRole)(roleTitle, roleSalary, roleDepartmentId);
            console.log(`Added role: ${roleTitle}`);
            break;
        case 'Add an employee':
            const { firstName, lastName, roleId, managerId } = yield inquirer_1.default.prompt([
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
            yield (0, queries_1.addEmployee)(firstName, lastName, roleId, managerId || null);
            console.log(`Added employee: ${firstName} ${lastName}`);
            break;
        case 'Update an employee role':
            const { employeeId, newRoleId } = yield inquirer_1.default.prompt([
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
            yield (0, queries_1.updateEmployeeRole)(employeeId, newRoleId);
            console.log(`Updated employee ID ${employeeId} to role ID ${newRoleId}`);
            break;
        case 'Exit':
            console.log('Goodbye!');
            process.exit();
    }
    mainMenu();
});
mainMenu();
