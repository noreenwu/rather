import React, { Component } from 'react'

class NewQuestion extends Component {
  state = {
    optionA: '',
    optionB: ''
  }

  handleChange(e, textfield) {

  }

  render() {
    return (
    
      <div>
        <h3 className='center'>Compose new Tweet</h3>
        <form className='new-question' onSubmit={this.handleSubmit}>
          <textarea
            placeholder="option A"
            value='temp'
            onChange={this.handleChange}
            className='textarea'
            maxLength={80}
          />
		  <p>OR</p>
          <textarea
            placeholder="option B"
            value='temp'
            onChange={this.handleChange}
            className='textarea'
            maxLength={80}
          />
          <button
            className='btn'
            type='submit'
            disabled={true}>
              Submit
          </button>
        </form>
      </div>    
    )
  }
}

export default NewQuestion