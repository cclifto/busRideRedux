import React from "react"
import STORE from '../store'
import ACTION from '../action'
import Events from './events'
import Combat from "./combat"
import Button from "./button"
import Stat from "./stat"

Array.prototype.includes = function(el) {
	return this.indexOf(el) !== -1
}

var AppView = React.createClass({	

	componentWillMount: function(){
		STORE.on("STOREChange",()=>{
			this.setState(STORE._getData())
		})
	},

	getInitialState: function(){
		return STORE._getData()
	},

	render: function(){
		return (
			<div className="body">
				<div className="main-container">
					
					<div className="game-container">
						<div className="option-box">
							{this.state.actionButtons.map(function(buttObj){
								return <Button 
									cooldownTime={buttObj.cooldownTime}
									text={buttObj.text}
									action={buttObj.action}
								/> })}
						</div>
					</div>
					<Status {...this.state} />
				</div>
				<Events 
					choices={this.state.event_choices} 
					display_text={this.state.event_display_text} 
					showing={this.state.event_showing} 
					/>
				<Combat
					HP={this.state.HP}
					ATK={this.state.ATK}
					DEF={this.state.DEF}
					oHP={this.state.oHP}
					oATK={this.state.oATK}
					oDEF={this.state.oDEF}
					currentEnemy ={this.state.currentEnemy}
					choices={this.state.combat_choices} 
					display_text={this.state.combat_display_text} 
					showing={this.state.combat_showing} 
					/>
			</div>
		)
	}
})

const Status = React.createClass({

	render: function(){
		var stats = ['STRENGTH','KNOWLEDGE','DISHES CLEANED','HEALTHINESS', 'CHORES DONE']
		var statComponents = stats.map((statStr) => {
			return <Stat statVal={this.props[statStr]} statName={statStr} />
		})
		return(
			<div className="status-container">
				<div className="stats">
					{statComponents}
				</div>
			</div>
		)
	}
})

export default AppView