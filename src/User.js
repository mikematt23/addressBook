import React from "react"
import './border.css'

class User extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isClicked:false
    }
  }

  changeState = ()=>{
    this.setState({
      isClicked : !this.state.isClicked
    })
    console.log(this.state.isClicked)
  }
   
  set = ()=>{
    return <h1>hello</h1>
  }
  render(){
   if(this.state.isClicked){
     return(
       <div className = "border">
         <h2>{this.props.user.name.first}</h2>
         <h6>Cell : {this.props.user.cell}</h6>
         <h6>Phone : {this.props.user.phone}</h6>
         <h6>Email : {this.props.user.email}</h6>
         <button onClick = {this.changeState}>Hide Info</button>
      </div>
      )
    }else{
      return(
        <div className ='border'>
          <h2>{this.props.user.name.first}</h2>
         <button onClick = {this.changeState}>See info</button>
        </div>
      )
    }
    
  }
}

export default User