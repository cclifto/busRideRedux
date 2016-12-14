import React from "react"
import Foot from './foot'
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
		// FIRST, BEFORE ANY OTHER WORK
		// you need to champagne-waterfall your initial state down to the components that need it
		// and render accordingly in those components.
		return (
			<div className="body">
				<div className="main-container">
					<div className="text-box">
						<p>You have taken your seat on the bus. You've got a long road ahead. Someone is sitting in the seat in front of you.</p>
					</div>
					<div className="game-container">
						<div className="option-box">
							{this.state.actionButtons.map(function(buttObj){
								return <Button 
									cooldownTime={buttObj.cooldownTime}
									text={buttObj.text}
									action={buttObj.action}
								/> })}
							{/*<Button cooldownTime={2000} text={'Read Book'} action={ACTION._readBook} />
							<Button cooldownTime={3000} text={'Talk To Neighbor'} action={ACTION._talkToNeighbor} />
							<Button cooldownTime={4000} text={'Work Out'} action={ACTION._exercise} />
							<Button cooldownTime={1000} text={'Do Nothing'} action={ACTION._doNothing} />*/}
						
						</div>
					</div>
					<Status {...this.state} />
				</div>
				<Foot />
				<Events 
					choices={this.state.event_choices} 
					display_text={this.state.event_display_text} 
					showing={this.state.event_showing} 
					/>
				<Combat
					yHP={this.state.yHP}
					oHP={this.state.oHP}
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
		var stats = ['ATK','DEF','INT','LUV', 'Miles Traveled']
		var statComponents = stats.map((statStr) => {
			return <Stat statVal={this.props[statStr]} statName={statStr} />
		})
		return(
			<div className="status-container">
				<div className="stats">
					{statComponents}
				</div>
				<div className="inventory">
					<p>Book</p>
					<p>Lunch</p>
					<p>Wrench</p>
					<p>Exercise Trainer</p>
				</div>
			</div>
		)
	}
})

export default AppView