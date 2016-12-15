import React from "react"
import Enemies from "../enemies"
import ACTION from "../action"

var Combat = React.createClass({

	render: function(){
		var classString = "combat-box"
		if(!this.props.showing){
			classString += " hidden"
		}
		console.log(this.props)
		return(
			<div className={classString}>
				<div className="combat-content">
					<p>{this.props.display_text}</p>
					<p>HP: {this.props.HP}</p>
					<p>Enemy HP: {this.props.oHP}</p>
					<button value={this.props.currentEnemy} onClick={ACTION._attack}>ATTACK</button>
				</div>
			</div>
		)
	}
})

export default Combat

