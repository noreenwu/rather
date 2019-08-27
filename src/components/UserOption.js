import React from 'react'
import { connect } from 'react-redux'

function UserOption ( props ) {

  const {id, name } = props

  return(
    <option  value={id}>{name}</option>	                
  )  
}


function mapStateToProps( {users, authedUser}, {id} ) {
  const name = users[id].name

  return {
    id,
    name,
  }
}

export default connect(mapStateToProps)(UserOption)