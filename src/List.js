import React from "react"
import User from './User'

let List = (props)=>{
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