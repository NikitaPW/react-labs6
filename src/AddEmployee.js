import React from 'react'

class AddEmployee extends React.Component{
    constructor(props)
    {
    super(props);
    this.state = {
        active:false,
        age:"",
        name:"",
        company:"",
        email:"",
        isSaving:false
      };
      this.onChange=this.onChange.bind(this);
    }

    onChange(event){
        this.setState({ [event.target.name] : event.target.value });
    }

    render()
    {
    return(
        <div>
            <div style={{border: '1px solid black', borderRadius:'5px', backgroundColor:'lightYellow', padding:'10px', margin:'10px'}}>
                {this.state.isSaving ? <label>Saving...</label>:
                <div>
                <label>Activity: </label>
                <select name="active" onChange={this.onChange} >
                <option value="true">Active </option>
                <option value="false">Not Active </option>
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
                <button style={{padding:'5px', width:'100px', borderRadius:'2px'}}>Submit</button>
                <button onClick={this.props.cancelAddEmployee} style={{padding:'5px', width:'100px', borderRadius:'2px'}}>Cancel</button>
                </div>}
            </div>
        </div>
        )
    }
}
export default AddEmployee