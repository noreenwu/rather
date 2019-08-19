import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function NavSignInOut (props) {
     if (props.name !== '') {
       return (
          <Fragment>
              <li>
                  Hello, {props.name}
              </li>
              <li>
                <NavLink to='/signin' activeClassName='signin'>
                  Logout
                </NavLink>
              </li>
          </Fragment>
       )
     }
     else {
        return (
          <li>
             <NavLink to='/signin' activeClassName='signin'>
             	Sign in
             </NavLink>
          </li>
        )
     }
}

NavSignInOut.propTypes = {
   name: PropTypes.string.isRequired,
}