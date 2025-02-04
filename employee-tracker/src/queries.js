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
exports.updateEmployeeRole = exports.addEmployee = exports.addRole = exports.addDepartment = exports.getEmployees = exports.getRoles = exports.getDepartments = void 0;
const db_1 = __importDefault(require("./db"));
const getDepartments = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.default.query('SELECT * FROM department');
    return res.rows;
});
exports.getDepartments = getDepartments;
const getRoles = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.default.query('SELECT * FROM role');
    return res.rows;
});
exports.getRoles = getRoles;
const getEmployees = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.default.query('SELECT * FROM employee');
    return res.rows;
});
exports.getEmployees = getEmployees;
const addDepartment = (name) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.default.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [name]);
    return res.rows[0];
});
exports.addDepartment = addDepartment;
const addRole = (title, salary, department_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.default.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, department_id]);
    return res.rows[0];
});
exports.addRole = addRole;
const addEmployee = (first_name, last_name, role_id, manager_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.default.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id]);
    return res.rows[0];
});
exports.addEmployee = addEmployee;
const updateEmployeeRole = (employee_id, role_id) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield db_1.default.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [role_id, employee_id]);
    return res.rows[0];
});
exports.updateEmployeeRole = updateEmployeeRole;
