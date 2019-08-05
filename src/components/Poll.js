import React, { Component } from 'react'
import { connect } from 'react-redux'
import {   withRouter } from 'react-router-dom'
import { formatQuestion } from '../utils/helpers'

class Poll extends Component {

   componentDidMount() {
     console.log("component did mount Poll ", this.props.match.params.id);
   }
   render() {
     // const { id } = this.props;
     console.log('the props of Poll', this.props);
     console.log("was this question answered: ", this.props.isAnswered);
     const { question } = this.props     
     const {
         optionA
     } = question  
     console.log("optionA", optionA);
     return(
       <div>
	       Poll

       </div>
     )
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
   // isAnswered:  question.optionOne.votes.includes(authedUser) ||
    //            question.optionTwo.votes.includes(authedUser) ? true : false
   }
}

//export default connect(mapStateToProps)(Poll)
export default withRouter(connect(mapStateToProps)(Poll))

//export default Poll