import React from 'react'
import PropTypes from 'prop-types'

const BarResult = (props) => {
  let voteSingPlur = 'votes'
  if (props.votesTotal === 1) {
    voteSingPlur = 'vote'
  }
  return(
    <div className="bar-result">
       {props.votesFor} out of {props.votesTotal} {voteSingPlur}
    </div>
  )
}

BarResult.propTypes = {
  votesFor: PropTypes.number.isRequired,
  votesTotal: PropTypes.number.isRequired,
}

export default BarResult