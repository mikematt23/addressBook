import React from 'react'

class ShowInfo extends React.Component{
  constructor(props){
    super(props)
  }

  info(){
   console.log('here')
   return <h2>hello</h2>
  }

  render(){
    return(
      <div>
        <button onClick = {this.info}></button>
      </div>
    )
  }
}

export default ShowInfo