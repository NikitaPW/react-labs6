import React from 'react'

class PageEmployee extends React.Component{
    constructor(props)
    {
    super(props);
    this.state = {
        isActive:false,
        age:"",
        name:"",
        company:"",
        email:"",
        isSaving:false
      };
      this.postEmployee = this.postEmployee.bind(this);
      this.onChange=this.onChange.bind(this);
    }

    onChange(event){
        this.setState({ [event.target.name] : event.target.value });
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

    postEmployee() {
            this.setState({ isSaving: true });
            fetch('http://localhost:3004/employees', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
    			body: JSON.stringify( {
                    isActive: this.state.active==="true" ? true :false,
                    age: this.state.age,
                    name: this.state.name,
                    company: this.state.company,
                    email: this.state.email
                  }),
            }).then(() => this.setState({ isSaving: false })
            ).then(() => this.UpdateEmployees());
        }

    render()
    {
    return(
        <div>
            <div style={{border: '1px solid black', borderRadius:'5px', backgroundColor:'lightYellow', padding:'10px', margin:'10px'}}>
                {this.state.isSaving ? <label>Saving...</label>:
                <div>
                <label>Activity: </label>
                <select name="active" onChange={this.onChange} selected={false}>
                <option value="true">Active </option>
                <option value="false">Not Active</option>
                </select>
                <br/>
                <br/>
                <label>Age: </label>
                <input name="age" type="number" min="0"
                    onChange={this.onChange}>
                </input>
                <br/>
                <br/>
                <label>Name: </label>
                <input name="name"
                    onChange={this.onChange}></input>
                <br/><br/>
                <label>Company: </label>
                <input name="company"
                    onChange={this.onChange}></input>
                <br/><br/>
                <label>E-mail: </label>
                <input name="email"
                    onChange={this.onChange}></input>
                <br/><br/>
                <button onClick={this.postEmployee} style={{padding:'5px', width:'100px', borderRadius:'2px'}}>Submit</button>
                <button onClick={this.props.cancelAddEmployee} style={{padding:'5px', width:'100px', borderRadius:'2px'}}>Cancel</button>
                </div>}
            </div>
        </div>
        )
    }
}
export default PageEmployee