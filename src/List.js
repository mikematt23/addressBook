import React from "react"
import './border.css'
import User from './User'




let List = (props)=>{
  console.log(props.users)
  
 

  return(
    <div>
      {
       props.users.map((user,index)=>{
         return(
             <User key={index} user ={user}/>
         )
       })
      }
    </div>
  )
}

export default List