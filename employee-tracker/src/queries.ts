import pool from './db';

// Define types for the functions
type Department = {
  id: number;
  name: string;
};

type Role = {
  id: number;
  title: string;
  salary: number;
  department_id: number;
};

type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  role_id: number;
  manager_id: number | null;
};

const getDepartments = async (): Promise<Department[]> => {
  const res = await pool.query('SELECT * FROM department');
  return res.rows;
};

const getRoles = async (): Promise<Role[]> => {
  const res = await pool.query('SELECT * FROM role');
  return res.rows;
};

const getEmployees = async (): Promise<Employee[]> => {
  const res = await pool.query('SELECT * FROM employee');
  return res.rows;
};

const addDepartment = async (name: string): Promise<Department> => {
  const res = await pool.query('INSERT INTO department (name) VALUES ($1) RETURNING *', [name]);
  return res.rows[0];
};

const addRole = async (title: string, salary: number, department_id: number): Promise<Role> => {
  const res = await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3) RETURNING *', [title, salary, department_id]);
  return res.rows[0];
};

const addEmployee = async (first_name: string, last_name: string, role_id: number, manager_id: number | null): Promise<Employee> => {
  const res = await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4) RETURNING *', [first_name, last_name, role_id, manager_id]);
  return res.rows[0];
};

const updateEmployeeRole = async (employee_id: number, role_id: number): Promise<Employee> => {
  const res = await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2 RETURNING *', [role_id, employee_id]);
  return res.rows[0];
};

export {
  getDepartments,
  getRoles,
  getEmployees,
  addDepartment,
  addRole,
  addEmployee,
  updateEmployeeRole,
};