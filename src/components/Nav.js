import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import NavSignInOut from './NavSignInOut'
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    const {pathname} = this.props.location;

    let homeHover, addHover, leaderHover, signinHover;
    switch (pathname) {
      case '/':
        homeHover = 'ignoremouse'
        addHover = ''
        leaderHover = ''
        signinHover = ''
        break;
      case '/add':
        homeHover = ''
        addHover = 'ignoremouse'
        leaderHover = ''
        signinHover = ''      
        break;
      case '/leaderboard':
        homeHover = ''
        addHover = ''
        leaderHover = 'ignoremouse'
        signinHover = ''        
        break;
      case '/signin':
        homeHover = 'ignoremouse'
        addHover = 'ignoremouse'
        leaderHover = 'ignoremouse'
        signinHover = 'ignoremouse'     
        break;
      default:
        homeHover = ''
        addHover = ''
        leaderHover = ''
        signinHover = ''        
    }


    return (
      <nav className='nav'>
        <ul>
          <li className={`li-std ${homeHover}`}>
           <NavLink to='/' exact activeClassName='active'>
              Home
           </NavLink>
          </li>
          <li className={`li-std ${addHover}`}>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li className={`li-std ${leaderHover}`}>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          <NavSignInOut name={this.props.name} hover={`${signinHover}`} avatar={this.props.avatar}/>

        </ul>
      </nav>
    )
   }
}

function mapStateToProps ({ authedUser, users } ) {
  const userInfo = users[authedUser];
  let name = '';
  let avatar = ''
  for(const key in userInfo) {
    if (key === 'name') {
      name = userInfo[key];
    }
    if (key === 'avatarURL') {
      avatar = userInfo[key];
	}
  }
  
  return {
    authedUser,
    name,
    avatar
  }
}

export default withRouter(connect(mapStateToProps)(Nav))
