import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserOption from './UserOption'
import { handleChangeAuthedUser } from '../actions/authedUser'

class UserSelector extends Component {
   constructor(props) {
      super(props)

      this.handleChange = this.handleChange.bind(this);
      // this.handleSubmit = this.handleSubmit.bind(this);    
   }  
  
  
   handleChange(e) {
      const {dispatch } = this.props
      console.log("UserSelector: handleChange ", e);
      
	// change authedUser to e     
      dispatch(handleChangeAuthedUser(e));
   }  
   render() {
     const { userIds } = this.props;
	 console.log("userIds", userIds);
     
     return(
        <div className="user-selector">
              <select value={this.props.authedUser} 
        			  onChange={(event) => this.handleChange(event.target.value)}>
                      {userIds.map(x => 
                          <UserOption key={x} id={x}/>) 
                      }

              </select>
        </div>
     )
   }  
}

function mapStateToProps( {users, authedUser} ) {
    const userIds = Object.values(users).map(x => x.id)
    //const userNames = Object.values(users).map(x => x.name)
	return {
      authedUser,
      userIds,
      users      // if another component renders the option in the select, then it can pull out the name from users
    }
  
}

export default connect(mapStateToProps)(UserSelector)