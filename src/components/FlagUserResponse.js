import React from 'react'
import PropTypes from 'prop-types'

const FlagUserResponse = (props) => {
  
  const optionHide = props.optionHide
  
  return(
		<div className={`user-vote ${optionHide}`}><br/>Your<br/>vote</div>        
  )
}

FlagUserResponse.propTypes = {
   optionHide: PropTypes.string.isRequired,  
}

export default FlagUserResponse