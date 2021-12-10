import React, { Component } from 'react';
import './EmployeeHome.css';
import logo from '../Assets/images/logo.png';
import addImage from '../Assets/icons/add-24px.svg';
import { Link } from "react-router-dom";
import Display from './Display';
import searchIcon from "../Assets/icons/search-black-18dp.svg";
import EmployeeService from '../Service/EmployeeService';


class EmployeeHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          searchExpand: false,
          employeeArray: [],
          AllEmployeeArray: [],
        };
      }
      openSearch = () => {
        this.setState({ searchExpand: true });
      };
      componentDidMount() {
        this.getAllEmployee();
      }
    
      getAllEmployee = () => {
        EmployeeService.getAllEmployee()
          .then((response) => {
            this.setState({
              employeeArray: response.data.data,
              AllEmployeeArray: response.data.data,
            });
          })
          .catch((err) => {
          alert("err after ", err);
          });
      };
    
      search = async (event) => {
        let search = event.target.value;
        
        this.setState({ employeeArray: this.state.AllEmployeeArray });
        let empArray = this.state.employeeArray;
        if (search.trim().length > 0)
          empArray = empArray.filter(
            (element) =>
              element.name.toLowerCase().indexOf(search.toLowerCase()) > -1
          );
        
        this.setState({ employeeArray: empArray });
      };
    render() {
        return (
            <div>
                <body>
                    <header class="header-content header">
                        <div class="logo-content">
                            <img src={logo} alt="logo" />
                            <div>
                                <span class="emp-text">EMPLOYEE</span><br/>
                                <span class="emp-text emp-payroll">PAYROLL</span>
                            </div>
                        </div>
                    </header>
                            <div class="main-content">
                                <div class="header-content sub-main-content">
                                    <div class="emp-details-text">
                                        Employee Details
                                    <div class="emp-count"></div>
                                </div>
                                 <div className="search-box" onClick={this.openSearch}>
                                    <input
                                    className={"input1 " + (this.state.searchExpand && "input1-expand")}
                                    onChange={this.search}
                                    type="text"
                                    placeholder=""
                                    />
                                <img className="search-icon" src={searchIcon} alt="" />
                                </div>
                            
                            <Link className="add-btn" to="/addemployee">
                               
                                    <img src={addImage} alt="Add user" />
                               
                                <div>Add User</div></Link>
                            
                        </div>
                        <div class="table-main">
                        <Display 
                                employeeArray={this.state.employeeArray}
                                getAllEmployee={this.getAllEmployee}
                         />  
                        </div>
                    </div>
                </body>
                
            </div>
        )
    }
}

export default EmployeeHome;
