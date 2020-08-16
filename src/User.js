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
  }
   
  render(){
   if(this.state.isClicked){
     return(
       <div className = "border2">
         <h2>{this.props.user.name.first}</h2>
         <h3>Cell : {this.props.user.cell}</h3>
         <h3>Phone : {this.props.user.phone}</h3>
         <h3>Email : {this.props.user.email}</h3>
         <button onClick = {this.changeState}>Hide Info</button>
      </div>
      )
    }else{
      return(
       
        <div className ='border'>
          <img className = "size" src = {this.props.user.picture.medium}></img>
          <h2>{this.props.user.name.first}</h2>
         <button onClick = {this.changeState}>See info</button>
        </div>
      )
    }
    
  }
}

export default User