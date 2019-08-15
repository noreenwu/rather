import React from 'react'
import PropTypes from 'prop-types'

const FlagUserResponse = (props) => {
  
  if ( props.displayAnswer === props.userAnswer) {
      return(
        <div className="user-response">FLAG {props.userAnswer}</div>    
      )
  }
  else {
      return(
         <div className="user-response"></div>
      )
  }
}

FlagUserResponse.propTypes = {
   userAnswer: PropTypes.string.isRequired,
   displayAnswer: PropTypes.string.isRequired,
  
}

export default FlagUserResponse