import React from 'react';

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
          console.log(data)
            this.setState({users: data})
        })
  }

  render(){
    return(
      <div></div>
    )
  }
  
}


export default App;
