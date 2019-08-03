import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav () {
  return (
    <nav className='nav'>
      <ul>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/new' activeClassName='active'>
            New Question
          </NavLink>
        </li>
        <li>
          <NavLink to='/leaderboard' activeClassName='leaderboard'>
            Leader Board
          </NavLink>
        </li>
    	<li>
    		Hello, user
    	</li>
        <li>
          <NavLink to='/signin' activeClassName='signin'>
            Logout
          </NavLink>
        </li>    
      </ul>
    </nav>
  )
}
