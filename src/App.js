import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PayrollHome from './component/EmployeeHome';
import EmployeePayroll from './component/Employeeform';
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
// import { Switch } from '@mui/material';


function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route path="/home">
          <PayrollHome />
          </Route>
        <Route path="/addemployee" >
          <EmployeePayroll />
        </Route>
        <Route exact path="/Employeeform/:id">
          <EmployeePayroll />
        </Route>
        <Route exact path="">
          <Redirect exact from="/" to="/home" />
        </Route>
      </Switch>   
      </Router>   
    </div>
  );
}

export default App;
