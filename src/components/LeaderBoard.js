import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserStatus from './UserStatus'
import { Redirect } from 'react-router-dom'


class LeaderBoard extends Component {
   render() {
     if ( this.props.authedUser === '' ) {
       return (
           <Redirect to={{
                pathname: '/signin',
                state: { returnTo: '/leaderboard' }
            }}
			/>
       )
     }     
     return(
       <div className="center">
	       <div className="title">Leader Board</div>
              <ul className="user-list">
                {this.props.sortedIds.map((id) => (
                  <li key={id}>
					<UserStatus id={id}/>
                  </li>
                ))}
              </ul>           
       </div>
     )
   }
  
}

function mapStateToProps( {users, authedUser } ) {

    const userVals = Object.values(users);
    const sorted = userVals.sort((a, b) => (Object.values(a.answers).length + Object.values(a.questions).length > 
                                            Object.values(b.answers).length + Object.values(b.questions).length 
                                 			? -1 : 1))

	const sortedIds = sorted.map(x => x.id);                   
    return {
      sortedIds,
      authedUser
    }
}

export default connect(mapStateToProps)(LeaderBoard)