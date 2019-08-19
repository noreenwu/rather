import React from 'react'
import PropTypes from 'prop-types'

const Option = (props) => {
  return(
    <div className="option">Would you rather {props.option}?</div>    
  )
}

Option.propTypes = {
   option: PropTypes.string.isRequired,
}

export default Option