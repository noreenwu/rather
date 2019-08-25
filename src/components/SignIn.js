import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserSelector from './UserSelector'
import { handleChangeAuthedUser } from '../actions/authedUser'

class SignIn extends Component {
  
   componentDidMount() {
      const { dispatch } = this.props  
      
      dispatch(handleChangeAuthedUser(''));      
   }
  
   render() {
    // returnTo is the page to return to after the user logs in
     const { returnTo = ''} = this.props.location.state || {};
          
     return(
       <div className="sign-in">
	       <div className="title">To play, please sign in below.</div>
       	   <div className="game-logo"><br/><span className="game-logo-large">Would</span><br/>
       							      <span className="game-logo-small">You</span><br/>
       								  <span className="game-logo-large">Rather...?</span><br/>


           </div>
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