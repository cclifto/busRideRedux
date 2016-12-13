import React from "react"
import ACTION from '../action'

var Foot = React.createClass({
	render: function(){
		return (
			<footer>
				<div className="options">
					<button onClick={ACTION._showSaveEvent}>save</button>
					<button onClick={ACTION._showLoadEvent}>load</button>
				</div>
				<nav>
					<p>Bus Ride Simulator Redux by Conner Clifton</p>
					<p>github</p>
				</nav>
			</footer>
			)
	}
})

export default Foot