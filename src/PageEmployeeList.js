import React from 'react'
import Employee from './Employee'
import { Link } from 'react-router-dom'
import { withRouter } from "react-router-dom";

class PageEmployeeList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
          isLoading: false,
          isDeleting: false
        };
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.componentGet = this.componentGet.bind(this);
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

    render(){
    const allEmployees = this.state.employees.map(employeeInfo =>
              <Employee  deleteEmployee={this.deleteEmployee} key={employeeInfo.id} data={employeeInfo}/>
        )
    if(this.state.isLoading) {
        return <p>Loading...</p>
    }

    if(this.state.employees) {
                return (
                    <div>
                        <div>{allEmployees}</div>
                        <Link to="/new">
                        <button onClick={this.addEmployee} style={{marginLeft:'10px',borderRadius:'1px', width:'140px', height:'40px'}}>Create new employee </button>
                        </Link>
                    </div>
                )
                }
    }
}

export default withRouter(PageEmployeeList)