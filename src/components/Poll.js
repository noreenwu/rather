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
           console.log("Poll will redirect and the id is ", this.props.id);
       
           return (
             <Redirect to={{
                  pathname: '/signin',
                  state: { returnTo: `/questions/${this.props.id}` }
                 }}
              />
           )       
     }     
     
     const { id, question } = this.props     

     if (question === null ) {
         console.log("Poll: question is undefined");
         return (
             <Redirect to={{
                  pathname: '/signin',
                  state: { returnTo: '/notfound' }
                 }}
              />
         )
	 }

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

  if (question === undefined) {
      return {
         id,
         question: null
	  }
  }

  return {
    id,
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
