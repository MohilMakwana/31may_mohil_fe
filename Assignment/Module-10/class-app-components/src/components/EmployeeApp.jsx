import React,{Component} from 'react'
const name="Mohil Makwana";
const classes="Frontend Development";
class Employee extends Component
{
    render()
    {
        return (

            <>
            <p> Class Component Life Cycle</p>
            <p> Class components in React have a well-defined life cycle that can be categorized into three main phases:</p>
            <ul>
                <li>Mounting (when an instance of a component is being created and inserted into the DOM)</li>
                <li>Updating (when the component is being re-rendered as a result of changes to either its props or state)</li>
                <li>Unmounting (when a component is being removed from the DOM)</li>
            </ul>
            <b>Eg.</b>

            <h1>Hello my name is {name}</h1>
            </>
      
        )
       
    }
}

class Company extends Employee
{
    render()
    {
        return (

          
            <>
              <Employee />
             <h2>I am studing {classes} at tops technology.</h2>   
            </>
      
        )
       
    }
}


export default Company
