import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserStatus from './UserStatus'
import { Redirect } from 'react-router-dom'


class LeaderBoard extends Component {
   render() {
     if ( this.props.authedUser === '' ) {
       return (
         <Redirect to='/notfound'/>
       )
     }     
     return(
       <div className="center">
	       LeaderBoard
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
    // TODO: users need to be sorted in order of highest to lowest score, which is 
    //   answered questions + created questions
  
    // const userIds = Object.keys(users);  
    const userVals = Object.values(users);
    // console.log("Leaderboard: uservals", userVals);
    const sorted = userVals.sort((a, b) => (Object.values(a.answers).length + Object.values(a.questions).length > 
                                            Object.values(b.answers).length + Object.values(b.questions).length 
                                 			? -1 : 1))
    console.log("Leaderboard: userVals sorted", sorted);
	sorted.forEach(function (item) {
      console.log(item.id, item.name);
    })
	const sortedIds = sorted.map(x => x.id);                   
    return {
      sortedIds,
      authedUser
    }
}
//export default LeaderBoard
export default connect(mapStateToProps)(LeaderBoard)