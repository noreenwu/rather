import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'
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
            this.setState(() => ({
                optionA: '',
                optionB: '',
                toHome: true
            }))         
    	})
   }   

 
  
  render() {
    
     if ( this.props.authedUser === '' ) {
         return (
           <Redirect to={{
                pathname: '/signin',
                state: { returnTo: '/add' }
            }}
			/>
		 )
     }
         
	 if (this.state.toHome === true) {
         return <Redirect to='/' />
      }

         
      return (
        <Fragment>
        <div className="title">Create New Question</div>
        <div className="question-frame">

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
        </Fragment>
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
