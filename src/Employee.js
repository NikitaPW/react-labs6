import React from 'react'

function Employee(props){
    return(
        <div>
            <div style={{border: '1px solid black', margin:'10px', padding:'10px', borderRadius:'5px', backgroundColor:'lightYellow',  height:'230px'}}>
                <div>
                    <p>Id: {props.data._id}</p>
                    <p>Active: {props.data.isActive.toString()}</p>
                    <p>Age: {props.data.age}</p>
                    <p>Name: {props.data.name}</p>
                    <p>Company: {props.data.company}</p>
                    <p>Email: {props.data.email}</p>
                </div>
            </div>
            <br />
        </div>
    )
}
export default Employee