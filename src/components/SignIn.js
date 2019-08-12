import React, { Component } from 'react'
import UserSelector from './UserSelector'

class SignIn extends Component {
   render() {
     return(
       <div className="sign-in">
	       <div className="title">Would You Rather...?</div>
       	   <div className="game-logo">LOGO</div>
       	   <div><UserSelector/></div>
       </div>
     )
   }
  
}

export default SignIn