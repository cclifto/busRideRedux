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
					<p>Bus Ride Simulator Redux by <a href="mailto:cliftonconner@gmail.com">Conner Clifton</a></p>
					<a href="https://github.com/cclifto/busRideSimulator">github</a>
				</nav>
			</footer>
			)
	}
})

export default Foot

/*<nav>
					<a href="http://www.connerclifton.com">connerclifton.com</a>
					<a href="http://facebook.com/connerclifton">facebook</a>
					<a href="https://github.com/cclifto/busRideSimulator">github</a>
					<a href="http://instagram.com/coonerqueefton">instagram</a>
					<a href="mailto:cliftonconner@gmail.com">email me</a>
				</nav>*/