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
		display_text: "NEIGHBOR: Nothing has really changed since you last talked to me, ok? You're officially annoying me. Here, read this BOOK.",
		choices:[{
			buttonText: "(Take BOOK) Ok, sorry, geez...",
			buttonValue: "cancel",
			clickHandler: (e)=>{
				ACTION._hideEvent(e)
				ACTION._incrementStat()
				ACTION._addReadButton()
			}
		}]
	},

	readAboutDefense:{
		display_text: "Actually this book is pretty cool. You learned a lot about how to defend yourself. DEF went up by 1!",
		choices:[{
			buttonText: "Nice.",
			buttonValue: "cancel",
			clickHandler: (e)=>{
				ACTION._hideEvent(e)
			}
		}]
	},

	// thirdNeighborTalk:{
	// 	display_text: "NEIGHBOR: You're officially annoying me. Leave me alone. Here, read this.",
	// 	choices:[{
	// 		buttonText: "(take BOOK) Thanks, dick.",
	// 		buttonValue: "cancel",
	// 		clickHandler: (e)=>{
	// 			ACTION._hideEvent(e)
	// 			ACTION._incrementStat()
	// 			ACTION._addReadButton()
	// 		}
	// 	}]
	// },

	// ENEMIES

	demoDemon:{
		display_text:"whoa that's a lotta hoses!",
		choices: [{
			buttonText: "FIGHT",
			buttonValue:"fight",
			clickHandler: ()=>{
				ACTION._displayCombat("demoDemon")
			}
		}]
	},

	lesser_demon: {
		display_text: "The bus is being attacked by some kind of... weird demon thing?",
			choices: [{
				buttonText: "FIGHT",
				buttonValue: 'fight',
				clickHandler: ()=>{
					ACTION._displayCombat("lesser_demon")
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
				{buttonText: "NAH, I'M GOOD"			
			}
				]
	},

	// YOU BEAT THE GAME

	victory:{
		display_text: "Oh man, you killed Satan himself! You're one bad hombre. Thanks for playing!",
		choices:[{buttonText: "PLAY AGAIN?",
					buttonValue: "reset",
					clickHandler: (e)=>{
						ACTION._hideEvent(e)
						ACTION._resetButtons()
						ACTION._reset()
					}}]
	},

	//SAVE AND LOAD FEATURES

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
	},

	deadLoad: {
		display_text: "You have died. Load a previous game? (pick a slot)",
		choices: [{
			buttonText: 'slot 1',
			buttonValue: 'slot_1',
			clickHandler: eventObj=>{
				ACTION._loadFromSlot(eventObj)
				ACTION._hideEvent(eventObj)
			}
		}]
	}
}

export default TextAndChoices