import React from 'react'
import PropTypes from 'prop-types'
import Sarah from '../images/user-female-100.jpg'
import Tyler from '../images/user-male-100.jpg'
import Penguin from '../images/penguin-100x100.jpg'


const Avatar = (props) => {
    if (props.avatar === 'female') {
	return (
	   <img className="avatar" 
                 alt="avatar of {props.name}"
                src={Sarah}/>    	    
	)
    }
    else if (props.avatar === 'male') {
	return (
	   <img className="avatar" 
                 alt="avatar of {props.name}"
                src={Tyler}/>    	    	    
	)
    }

    else {
	return (
	   <img className="avatar" 
                 alt="avatar of {props.name}"
                src={Penguin}/>    	    	    
	)
    }

}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default Avatar
