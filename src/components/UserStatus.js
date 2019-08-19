import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class UserStatus extends Component {
   render() {
     console.log("UserStatus: ", this.props.name);
     const {name, avatar, numAnswers, numQuestions, totalScore} = this.props
     return(
        
        <div className="user-status">
           <div className="user-info">
				  <Avatar name={name} avatar={avatar}/>
           </div>
           <div className="user-score-info">
       		   <h3>{name}</h3>
               <div className="user-answered">
					<span className="user-ans-score-title">Answered questions</span>
				    <span className="user-ans-score"> {numAnswers}</span>
			   </div>
			   <div className="user-created">
					<span className="user-cre-score-title">Created questions</span>
					<span className="user-cre-score"> {numQuestions}</span>
			   </div>

    	   </div>	
		   <div className="user-total-score">
               <div className="score-title">Score</div> 
			   <div className="score">{totalScore}</div>
		   </div>
        </div>
     )
   }
}

function mapStateToProps( {users}, {id} ) {
	// return info for the one user  
  
  const user = users[id]
  const numAnswers = Object.values(user.answers).length
  const numQuestions = Object.values(user.questions).length
  return {
    id,
    user,
    name: user.name,
    avatar: user.avatarURL,
    numAnswers,
    numQuestions,
    totalScore: numAnswers + numQuestions
  }
   
}
export default connect(mapStateToProps)(UserStatus)
