import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
//import { handleAddQuestion } from '../actions/users'
import { Redirect } from 'react-router-dom'
//import NotFound from './NotFound'

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

   // dispatch(handleAddQuestion(optionA, optionB))
    
   // this.setState(() => ({
    //    optionA: '',
    //    optionB: '',
    //    toHome: true    // set after asynch call to handlesubmit
    // }))     
    
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
    
     if ( this.props.authedUser === '' ) {
         console.log("NewQuestion redirecting to /signin");
         return <Redirect to='/signin' />
     }
         
	 if (this.state.toHome === true) {
         console.log("NewQuestion redirecting to /");
         return <Redirect to='/' />
      }

         
      return (

        <div className="question-frame">
          <h3 className="title">Create New Question</h3>
          <p>Complete the question:</p>
          <div className="subheading">Would you rather...</div>
          <form className='new-question' onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="optionA"
              placeholder="option A"
              value={this.state.optionA}
              onChange={this.handleChange}
              className='text-area'
              maxLength={100}
              size={79}
            />
            <p className="center">OR</p>
            <input
              name="optionB"
              type="text"
              placeholder="option B"
              value={this.state.optionB}
              onChange={this.handleChange}
       		  className='text-area'
              maxLength={100}
              size={79}
            />
            <button
              className={`btn btn-full`}
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
