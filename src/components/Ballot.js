import React, { Component } from 'react'
// import React from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import Avatar from './Avatar'

class Ballot extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  handleChange(event) {
	console.log("Ballot: handleChange");
    this.setState( {
      value: event.target.value
    })
  }
  
  handleSubmit(event) {
    event.preventDefault();    
    alert('A choice was submitted: ' + this.state.value + ' ' + this.props.id);
   // TODO: save permanently via the API and redirect to the PollResults page, passing the id
    
    
  }  
  
  
  render() {
    const { value } = this.state
    const { question } = this.props
    if (question === null) {
      return <p>This Question doesn't exist</p>
    }    
    
    const {
      name, avatar, optionA, optionB
    } = question  
    

    return (
       <div className="question-frame"> 
      	  <div className="title">
		      {name} asks...
          </div>
		  <div className="question">
              <div className="user-info">
                 <Avatar avatar={avatar} name={name}/>
              </div>

 		      <div className="question-info">
		      <h3>Would you rather...</h3>
		      <form onSubmit={this.handleSubmit}>
                  <fieldset>
                    <div className="choices">
                       <input type="radio" name="choice" value="optionOne" onChange={this.handleChange}/>
                       <label htmlFor="optionA">{optionA}</label>
                    </div>
                    <p>OR</p>
                    <div className="choices">
                       <input type="radio" name="choice" value="optionTwo" onChange={this.handleChange}/>
                       <label htmlFor="optionB">{optionB}</label>
                    </div>
                   </fieldset>
				  <button
                    className='btn'
                    type='submit'
                    disabled={value === ''}>Submit</button>
			   </form>

			  </div>
          </div>
       </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]
  
  return {
    authedUser,
    question: question
    	? formatQuestion(question, users[question.author], authedUser)
        : null,
   }
}

export default connect(mapStateToProps)(Ballot)