import React, { Component } from 'react'

class Poll extends Component {


   render() {
     // const { id } = this.props;
     console.log("Poll ", this.props.match.params.id);
     return(
       <div>
	       Poll
       </div>
     )
   } 
}

export default Poll