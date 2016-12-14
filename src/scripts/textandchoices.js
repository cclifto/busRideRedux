import ACTION from './action'

var TextAndChoices = {
	firstNeighborTalk:{
		display_text: "NEIGHBOR: Oh hello. How long have you been on the bus? Personally, I can't remember when I got on. It feels like days.",
		choices:[{
			buttonText: "Cool dude.",
			buttonValue: "cancel",
			clickHandler: (e)=>{
				ACTION._hideEvent(e)
				ACTION._incrementStat()
			}
		}]
	},

	secondNeighborTalk:{
		display_text: "NEIGHBOR: Yeah, what's up? Nothing has really changed since you last talked to me, ok?",
		choices:[{
			buttonText: "Ok, sorry, geez...",
			buttonValue: "cancel",
			clickHandler: (e)=>{
				ACTION._hideEvent(e)
				ACTION._incrementStat()
			}
		}]
	},

	thirdNeighborTalk:{
		display_text: "NEIGHBOR: You're officially annoying me. Leave me alone. Here, read this.",
		choices:[{
			buttonText: "(take BOOK) Thanks, dick.",
			buttonValue: "cancel",
			clickHandler: (e)=>{
				ACTION._hideEvent(e)
				ACTION._incrementStat()
				ACTION._addReadButton()
			}
		}]
	},

	devil: {
		display_text: "You have arrived at your destination: Hell. The Devil is here and he is looking to fight. He notices you and decides he is gonna throw down.",
		choices: [{buttonText: "FIGHT",
				buttonValue: 'fight',
				clickHandler: ()=>{
					ACTION._displayCombat('devil')
				}
			},
				{buttonText: "NAH, I'M GOOD",
				buttonValue: "cancel",
				clickHandler: (e)=>{
					ACTION._hideEvent(e)
					ACTION._incrementStat()
			}
		}]
	},

	save: {
		display_text: "Would you like to save your game? (pick a save slot)",
		choices: [{
			buttonText: 'slot 1',
			buttonValue: 'slot_1',
			clickHandler: eventObj=> ACTION._saveToSlot(eventObj)
		}, {
			buttonText: 'cancel',
			buttonValue: 'cancel',
			clickHandler: eventObj=> ACTION._hideEvent(eventObj)
			}
		]
	},

	load: {
		display_text: "Load a previous game? (pick a slot)",
		choices: [{
			buttonText: 'slot 1',
			buttonValue: 'slot_1',
			clickHandler: eventObj=>ACTION._loadFromSlot(eventObj)
		}, {
			buttonText: 'cancel',
			buttonValue: 'cancel',
			clickHandler: eventObj=>ACTION._hideEvent(eventObj)
			}]
	}
}

export default TextAndChoices