import React from 'react'

import PageEmployee from './PageEmployee'
import PageEmployeeList from './PageEmployeeList'
import Employee from './Employee'

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showEmployees:false,
          addEmployee: false,
          isLoading: true,
        };
        this.cancelAddEmployee = this.cancelAddEmployee.bind(this);
        this.showEmployees = this.showEmployees.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
    }
    cancelAddEmployee(){
        this.setState({addEmployee : false});
    }

    showEmployees(){
        this.state.showEmployees ? this.setState({showEmployees: false} ): this.setState({showEmployees: true});
    }

    addEmployee(){
        this.state.addEmployee ? this.setState({addEmployee:false}) : this.setState({addEmployee: true});
    }

    render(){
    return(
          <div>
              <div> <button onClick={this.showEmployees} style={{borderRadius:'1px', width:'140px', height:'40px'}}>All employees: </button>
              <button onClick={this.addEmployee} style={{borderRadius:'1px', width:'140px', height:'40px'}}>Add Employee: </button>
              <br/>
              {this.state.showEmployees ? <PageEmployeeList /> : ""}
              {this.state.addEmployee ? <PageEmployee cancelAddEmployee={this.cancelAddEmployee}/> : ""}
              </div>
          </div>
        )
    }
}
export default Component