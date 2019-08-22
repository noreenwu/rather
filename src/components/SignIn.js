import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserSelector from './UserSelector'
import { handleChangeAuthedUser } from '../actions/authedUser'

class SignIn extends Component {
  
   componentDidMount() {
      const { dispatch } = this.props  
      
      console.log("SignIn: ComponentDidMount");
      dispatch(handleChangeAuthedUser(''));      
   }
  
   render() {

     console.log("SignIn: did I receive the next page ", this.props.location);


     const { returnTo = ''} = this.props.location.state || {};

     
     
     return(
       <div className="sign-in">
	       <div className="title">Would You Rather...?</div>
       	   <div className="game-logo"><img alt="LOGO" src="../../images/would-you-rather-logo.jpg"/></div>
       	   <div><UserSelector returnTo={returnTo}/></div>
       </div>
     )
   }
  
}

function mapStateToProps({authedUser}) {
   return {
     authedUser
   }
}

export default connect(mapStateToProps)(SignIn)