import React from 'react'
import PropTypes from 'prop-types'

const Option = (props) => {
  return(
    <div className="option">{props.option}</div>    
  )
}

Option.propTypes = {
   option: PropTypes.string.isRequired,
}

export default Option