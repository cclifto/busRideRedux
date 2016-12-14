import React from "react"
import TextAndChoices from "../textandchoices"

var Events = React.createClass({

	_getButtonsArray: function() {
		
		var choiceObjs = this.props.choices
		var buttsArray = []
		for(var i = 0; i < choiceObjs.length; i++){
			buttsArray.push(<button onClick={choiceObjs[i].clickHandler} value={choiceObjs[i].buttonValue}>{choiceObjs[i].buttonText}</button>)
		}
		return buttsArray
	},

	render: function(){
		var classString = "event-box"
		if(!this.props.showing){
			classString += " hidden"
		}
		return(
			<div className={classString}>
				<div className="event-content">	
					<p>{this.props.display_text}</p>
					{this._getButtonsArray()}
				</div>
			</div>
		)
	}
})

export default Events

