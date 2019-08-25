import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserOption extends Component {  
   render() {
     const {id, name, avatar} = this.props
     
     console.log("UserOption: avatar: ", avatar);
     //const optionStyle = `background-image:url(${avatar})`;
     return(
     	<option  value={id}>{name}</option>	
                
     )
   }
  
}


function mapStateToProps( {users, authedUser}, {id} ) {
  const name = users[id].name
  const avatar = users[id].avatarURL
  return {
    id,
    name,
    avatar
  }
}

export default connect(mapStateToProps)(UserOption)