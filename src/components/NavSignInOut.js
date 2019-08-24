import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function NavSignInOut (props) {
     if (props.name !== '') {
       return (
          <Fragment>
              <li className={`li-std ${props.hover}`}>
                <NavLink to='/signin' activeClassName='active'>
                  Logout
                </NavLink>
              </li>
              <li className="nav-login-name">
                  Hello, {props.name}
              </li>         
          </Fragment>
       )
     }
     else {
        return (
          <li className={`li-std ${props.hover}`}>
             <NavLink to='/signin' activeClassName='active'>
             	Sign in
             </NavLink>
          </li>
        )
     }
}

NavSignInOut.propTypes = {
   name: PropTypes.string.isRequired,
   hover: PropTypes.string.isRequired
}