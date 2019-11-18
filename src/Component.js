import React from 'react'

import AddEmployee from './AddEmployee'
import Employee from './Employee'

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showEmployees:false,
          employees: [],
          addEmployee: false,
          isLoading: true,
          isDeleting: false
        };
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.cancelAddEmployee = this.cancelAddEmployee.bind(this);
        this.showEmployees = this.showEmployees.bind(this);
        this.addEmployee = this.addEmployee.bind(this);
        this.componentGet = this.componentGet.bind(this);
    }
    cancelAddEmployee(){
        this.setState({addEmployee : false});
    }

    componentDidMount() {
        this.componentGet();
    }

    componentGet(){
        this.setState({ isLoading:true});
        fetch('http://localhost:3004/employees')
        .then(response => response.json())
        .then(data => this.setState({ employees:data }))
        .then(() => {this.setState({ isLoading: false })
        });
    }

    UpdateEmployees() {
         this.setState({
              isLoading: true
         });

         fetch('http://localhost:3004/employees')
            .then(response => response.json())
             .then(data => this.setState({employees: data}))
             .then(() => this.setState({isLoading: false}));
          }

    deleteEmployee(userId){
              this.setState({isDeleting:true})
              fetch('http://localhost:3004/employees/'+userId, {
              method: 'DELETE',
              headers: {'content-type': 'application/json'},
              body: JSON.stringify({id:userId})
              }).then(()=>{this.setState({isDeleting:false})
              }).then(() => this.UpdateEmployees());
    }

    showEmployees(){
        this.state.showEmployees ? this.setState({showEmployees: false} ): this.setState({showEmployees: true});
    }

    addEmployee(){
        this.state.addEmployee ? this.setState({addEmployee:false}) : this.setState({addEmployee: true});
    }

    render(){
    const allEmployees = this.state.employees.map(employeeInfo =>
          <Employee deleteEmployee={this.deleteEmployee} key={employeeInfo.id} data={employeeInfo}/>
    )
    return(
          <div>
            {this.state.isLoading ? <h3>Loading...</h3> :
              <div> <button onClick={this.showEmployees} style={{borderRadius:'1px', width:'140px', height:'40px'}}>All employees: </button>
              <button onClick={this.addEmployee} style={{borderRadius:'1px', width:'140px', height:'40px'}}>Add Employee: </button>
              <br/>
              {this.state.showEmployees ? allEmployees : ""}
              {this.state.addEmployee ? <AddEmployee cancelAddEmployee={this.cancelAddEmployee}/> : ""}
              </div>

            }
          </div>
        )
    }
}
export default Component