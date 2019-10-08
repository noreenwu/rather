import React from 'react'
import PropTypes from 'prop-types'
import Sarah from '../images/user-female-100.jpg'
import Tyler from '../images/user-male-100.jpg'
import Penguin from '../images/penguin-100x100.jpg'


const Avatar = (props) => {
    
    if (props.avatar === 'female') {
	return (
	    <img className={props.class}
                 alt="avatar of {props.name}"
                 src={Sarah}
	         width={props.width}
	         height={props.height}	    
		/>    	    
	)
    }
    else if (props.avatar === 'male') {
	return (
	    <img className={props.class}
                 alt="avatar of {props.name}"
                 src={Tyler}
	         width={props.width}
	         height={props.height}
	        />
	)
    }

    else {
	return (
	    <img className={props.class} 
                 alt="avatar of {props.name}"
                 src={Penguin}
	         width={props.width}
	         height={props.height}
	        />
	)
    }

}

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

Avatar.defaultProps = {
    class: 'avatar',
    width: '100',
    height: '100'
}

export default Avatar
