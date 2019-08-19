import React, { Component } from 'react'
import { connect } from 'react-redux'
import {   withRouter } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'
import PollResults from './PollResults'
import Ballot from './Ballot'
import { Redirect } from 'react-router-dom'

class Poll extends Component {
	
   render() {
     if (this.props.authedUser === '') {
         return(
        	<Redirect to='/signin'/>         )
     }     
     
     // TODO: check if poll with specified id exists, and if not, redirect to NotFound
     const { question } = this.props     
     const {
       //  optionA, optionB, 
       id
     } = question  
     

     if (this.props.isAnswered) {
         return(

           <div>
               <PollResults id={id}/>
           </div>
         )       
     }
     else {
        return(
           <div>
            	<Ballot id={id}/>
            </div>
        )
       
     }

   } 
}

function mapStateToProps({authedUser, users, questions}, ownProps) {
  const {id} = ownProps.match.params
  const question = questions[id]
  // did the authedUser answer this question?
  return {
    authedUser,
    question: question
    	? formatQuestion(question, users[question.author], authedUser)
        : null,    
   
   isAnswered: question.optionOne.votes.includes(authedUser) ||
    		   question.optionTwo.votes.includes(authedUser) ? true : false

   }
}

//export default connect(mapStateToProps)(Poll)
export default withRouter(connect(mapStateToProps)(Poll))

//export default Poll