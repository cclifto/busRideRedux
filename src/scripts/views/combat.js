import React from "react"
import Enemies from "../enemies"
import ACTION from "../action"

var Combat = React.createClass({

	render: function(){
		var classString = "combat-box"
		if(!this.props.showing){
			classString += " hidden"
		}
		return(
			<div className={classString}>
				<div className="combat-content">
					<p>{this.props.combat_display_text}</p>
					<p>HP: {this.props.yHP}</p>
					<p>Enemy HP: {this.props.oHP}</p>
					<button onClick={ACTION._attack}>ATTACK</button>
				</div>
			</div>
		)
	}
})

export default Combat

