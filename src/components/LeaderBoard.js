import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
   render() {
     return(
       <div>
	       LeaderBoard
              <ul className='user-list'>
                {this.props.userIds.map((id) => (
                  <li key={id}>
					{id}
                  </li>
                ))}
              </ul>           
       </div>
     )
   }
  
}

function mapStateToProps( {users} ) {
    // TODO: users need to be sorted in order of highest to lowest score, which is 
    //   answered questions + created questions
  
    const userIds = Object.keys(users);  
    const userVals = Object.values(users);
    console.log("Leaderboard: uservals", userVals);
    const sorted = userVals.sort((a, b) => (Object.values(a.answers).length + Object.values(a.questions).length > 
                                            Object.values(b.answers).length + Object.values(b.questions).length 
                                 			? -1 : 1))
    console.log("Leaderboard: userVals sorted", sorted);
	sorted.forEach(function (item) {
      console.log(item.id);
    })
                   
    return {
      userIds
    }
}
//export default LeaderBoard
export default connect(mapStateToProps)(LeaderBoard)