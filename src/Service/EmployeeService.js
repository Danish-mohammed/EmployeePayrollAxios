import Axios from "axios";

const BASE_URL = "http://localhost:8080";
const ADD_EMPLOYEE_URL = "/home/create";
const GET_EMPLOYEES_URL = "/home/get/all";
const GET_EMPLOYEE_URL = "/home/get/";
const UPDATE_EMPLOYEE_URL = "/home/update/";
const DELETE_EMPLOYEE_URL = "/home/delete/";

class EmployeeService {

  getAllEmployee() {
    return Axios.get(BASE_URL + GET_EMPLOYEES_URL);
  }
  addEmployee(employee) {
    return Axios.post(BASE_URL + ADD_EMPLOYEE_URL, employee);
  }
  getEmployeeById(employeeId) {
    return Axios.get(BASE_URL + GET_EMPLOYEE_URL + employeeId);
  }
  updateEmployee(employee, employeeId) {
    return Axios.put(BASE_URL + UPDATE_EMPLOYEE_URL + employeeId, employee);
  }
  deleteEmployee(employeeId) {
    return Axios.delete(BASE_URL + DELETE_EMPLOYEE_URL + employeeId);
  }
}

export default new EmployeeService();