import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PayrollHome from './component/EmployeeHome';
import EmployeePayroll from './component/Employeeform';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<PayrollHome />} />
        <Route path="/addemployee" element={<EmployeePayroll/>} />
      </Routes>      
    </div>
  );
}

export default App;
