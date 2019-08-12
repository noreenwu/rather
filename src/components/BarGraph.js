import React from 'react'
import PropTypes from 'prop-types'

const BarGraph = (props) => {
  const votes = props.votesFor;
  const total = props.votesTotal;
  const percentage = Math.round((votes * 100)/total);
  console.log("BarGraph percentage: ", percentage);
  const percentObj = { width: `${percentage}%` };
  return(
    <div className="bar-container">
  		<div className="bar-base">
    		<div className="bar-fraction" style={percentObj}>{percentage}%
    	    </div>
  	    </div>    
    </div>
  )
}

BarGraph.propTypes = {
  votesFor: PropTypes.number.isRequired,
  votesTotal: PropTypes.number.isRequired,  
}

export default BarGraph