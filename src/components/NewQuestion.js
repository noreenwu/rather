import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
//import { handleAddQuestion } from '../actions/users'
import { Redirect } from 'react-router-dom'

class NewQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optionA: '',
      optionB: '',
      toHome: false
  	}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);    
  }


  handleChange(e) {
	this.setState(
      {
        optionA: e.target.name === "optionA" ? e.target.value : this.state.optionA,
        optionB: e.target.name === "optionB" ? e.target.value : this.state.optionB
      }
    )
  }

  
  handleSubmit(e) {
    e.preventDefault();
    
    const {optionA, optionB} = this.state;
    const { dispatch } = this.props
            
    dispatch(handleAddQuestion(optionA, optionB))
    	.then(updateState => {
			console.log('newquestion: updateState');
            this.setState(() => ({
                optionA: '',
                optionB: '',
                toHome: true
            }))         
    	})
   }   

  
  
  render() {
	 if (this.state.toHome === true) {
         return <Redirect to='/' />
      }
 
      return (

        <div className="question-frame">
          <h3 className="title">Create New Question</h3>
          <form className='new-question' onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="optionA"
              placeholder="option A"
              value={this.state.optionA}
              onChange={this.handleChange}
              className='textarea'
              maxLength={100}
              size={80}
            />
            <p>OR</p>
            <input
              name="optionB"
              type="text"
              placeholder="option B"
              value={this.state.optionB}
              onChange={this.handleChange}
              maxLength={100}
              size={80}
            />
            <button
              className='btn'
              type='submit'
              disabled={this.state.optionA === '' || this.state.optionB === ''}>
                Submit
            </button>
          </form>
        </div>    
      )
    
  }
}

function mapStateToProps( {authedUser} ) {
  return {
    authedUser
  }
}
//export default NewQuestion
export default connect(mapStateToProps)(NewQuestion)
