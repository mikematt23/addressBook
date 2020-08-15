import React from 'react';
import List from './List'

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      users :[]
      
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api?results=25')
        .then(res => res.json())
        .then(data => {
            this.setState({users: data.results})
        })
  }

  render(){
    return(
      <div>
        <List users ={this.state.users}></List>
      </div>
    )
  }
  
}


export default App;
