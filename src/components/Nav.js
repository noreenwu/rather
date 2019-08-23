import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import NavSignInOut from './NavSignInOut'

export default function Nav (props) {
  return (

    <nav className='nav'>
      <ul>
        <li className="li-std">
         <NavLink to='/' exact activeClassName='active'>
            Home
	     </NavLink>
        </li>
        <li className="li-std">
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li className="li-std">
          <NavLink to='/leaderboard' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
		<NavSignInOut name={props.name}/>

      </ul>
    </nav>
  )
}

Nav.propTypes = {
   name: PropTypes.string.isRequired,
}