import React, { Component } from 'react'
import { connect } from 'react-redux'
import {   withRouter } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'
import PollResults from './PollResults'
import Ballot from './Ballot'

class Poll extends Component {

   componentDidMount() {
     console.log("component did mount Poll ", this.props.match.params.id);
   }
  
	
   render() {
     console.log('the props of Poll', this.props);
     console.log("was this question answered: ", this.props.isAnswered);

     const { question } = this.props     
     const {
         optionA, optionB, id
     } = question  
     console.log("optionA and B", optionA, optionB);
     
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