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
					<p className="opponentName">{this.props.display_text}</p>
					<div className="combatStats">
						<div className="playerStats">
							<p>Player HP: {this.props.HP}</p>
							<p>Player ATK: {this.props.ATK}</p>
							<p>Player DEF: {this.props.DEF}</p>
						</div>
					</div>
					<div className="combatStats">
						<div className="opponentStats">
							<p>Enemy HP: {this.props.oHP}</p>
							<p>Enemy ATK: {this.props.oATK}</p>
							<p>Enemy DEF: {this.props.oDEF}</p>
						</div>
					</div>
					<button value={this.props.currentEnemy} onClick={ACTION._attack}>ATTACK</button>
				</div>
			</div>
		)
	}
})

export default Combat

