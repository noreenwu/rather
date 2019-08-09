import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optionA: '',
      optionB: ''
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
    
    console.log("NewQuestion: handleSubmit: ", optionA, optionB);
    
    // TODO: save to permanent state via api
    dispatch(handleAddQuestion(optionA, optionB))
    
    this.setState(() => ({
        optionA: '',
        optionB: ''
    }))    

  }
  
  render() {
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

//export default NewQuestion
export default connect()(NewQuestion)
