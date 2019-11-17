import React from 'react'

import Employee from './Employee'

class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          employees: [],
          isLoading: true
        };
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

      render(){
      const allEmployees = this.state.employees.map(employeeInfo =>
              <Employee key={employeeInfo._id} data={employeeInfo}/>
       )

       return(
          <div>
            {this.state.isLoading ? <h3>Loading...</h3> :
              <div> All employees:
              <br/>
              {allEmployees}
              </div>
            }
          </div>
        )
      }
}
export default Component