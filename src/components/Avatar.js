import React from 'react'
import PropTypes from 'prop-types'

const Avatar = (props) => {
  return(
      <img className="avatar" 
      alt="avatar of {props.name}"
      src={props.avatar}/>    
  )
}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Avatar