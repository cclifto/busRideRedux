import STORE from "./store"
import TextAndChoices from "./textandchoices"
import Enemies from "./enemies"
//below is the import syntax when importing something by name from a file,
//and that thing is not the default export

// ACTION[this.props.clickHandler]()


var ACTION = {
	_incrementMiles: function(input){
		STORE._set({
			'Miles Traveled': STORE._get('Miles Traveled') + input
		})
		if(STORE._data['Miles Traveled'] === 3){
			ACTION._triggerDevil()
		}
		// if(STORE._data['Miles Traveled'] === 3){
		// 	ACTION._firstNeighborTalk()
		// }
		if(STORE._data['Miles Traveled'] === 6){
			ACTION._secondNeighborTalk()
		}
		if(STORE._data['Miles Traveled'] === 9){
			ACTION._thirdNeighborTalk()
		}
	},

	_incrementStat: function(statName) {
		var newData = {}
		newData[statName] = STORE._get(statName) + 1
		STORE._set(newData)
		STORE._set({
			flashingStats: [statName,'Miles Traveled']
		})
		STORE.trigger('flash')
		// actually set a new value for the stat
		// set the flashingStat on the store to be the stat name of what was just updated
	},

	_addReadButton: function(buttonValue){
		// you need to use array.concat. look at the docs and play with it in arbiter. 
		// read the old actionButtons off the store, add a new one, and set the new&improved 
			// action buttons back on the store

		var newButton = [
				{
				cooldownTime: 1500,
				text: 'Read Book',
				action: '_readBook'
			}
		]

		var actionButtons = [ 
			{
				cooldownTime: 3000,
				text: "Talk To Neighbor (He doesn't want to talk to you right now)",
				action: null
			}
		]
		if(STORE._data['Miles Traveled'] === 9){
				STORE._set({
			actionButtons: actionButtons.concat(newButton)/*fancy code to read old actionButtons and add newButton to it*/
				})
		}
	},

	_readBook: function(buttonValue){
		ACTION._incrementStat('INT')
		ACTION._incrementMiles(1)
	},

	_talkToNeighbor: function(buttonValue){
		ACTION._incrementStat('LUV')
		ACTION._incrementMiles(3)
	},

	_exercise: function(buttonValue){
		ACTION._incrementStat('ATK')
		ACTION._incrementMiles(1)
	},

	_doNothing: function(buttonValue){
		ACTION._incrementStat()
		ACTION._incrementMiles(1)
	},

	_hideEvent: function() {
		STORE._set({
			event_showing: false
		})
	},

	_loadFromSlot: function(eventObj) {
		var loadState = JSON.parse(localStorage.getItem('busRideSimulator'))
		STORE._set(loadState)
		ACTION._hideEvent()
		//2 steps:
			// 1) read app state from local storage (done)
			// 2) that app state becomes the STORE's _data
		// localStorage.setItem('busRideSimulator', loadState)
		// use a method called JSON.parse to load the 'busRideSimulator' from storage, and then set it on the store
	},

	_saveToSlot: function(eventObj) {
		ACTION._hideEvent()
		var stateAsString = JSON.stringify(STORE._getData())
		localStorage.setItem('busRideSimulator',stateAsString)
		// ACTION._hideEvent()
	},

	_unflash: function() {
		STORE._set({
			flashingStat: null
		})
	},

	//EVENTS

	_displayEvent: function(eventName) {
		STORE._set({
			event_display_text: TextAndChoices[eventName].display_text,
			event_choices: TextAndChoices[eventName].choices,
			event_showing: true
		})
	},

	_showLoadEvent: function() {
		ACTION._displayEvent('load')
	},

	_showSaveEvent: function() {
		ACTION._displayEvent('save')
	},

	_firstNeighborTalk: function(){
		ACTION._displayEvent('firstNeighborTalk')
	},

	_secondNeighborTalk: function(){
		ACTION._displayEvent('secondNeighborTalk')
	},

	_thirdNeighborTalk: function(){
		ACTION._displayEvent('thirdNeighborTalk')
	},

	_triggerDevil: function(){
		ACTION._displayEvent('devil')
	},

	//COMBAT

	_displayCombat: function(enemyName) {
		STORE._set({
			oHP: STORE._get('oHP'),
			// var originalHP = STORE._get('oHP') ? STORE._get('oHP') : Enemies[enemyName].HP // is there an oHP on the store? no? use starting hp. yes? use store's.
			combat_display_text: Enemies[enemyName].display_text,
			combat_showing: true
		})
		this._initializeEnemyStats(enemyName)
	},

	_initializeEnemyStats: function(enemyName){
		var originalHP = STORE._get('oHP') ? STORE._get('oHP') : Enemies[enemyName].HP // is there an oHP on the store? no? use starting hp. yes? use store's.
		var oATK = Enemies[enemyName].ATK
		var oDEF = Enemies[enemyName].DEF
	},


	_attack: function(enemyName){
		var yHP = STORE._get('yHP')
		var yATK = STORE._get('ATK')
		var yDEF = STORE._get('DEF')
		// STORE._set({
		var originalHP = STORE._get('oHP') ? STORE._get('oHP') : Enemies[enemyName].HP // is there an oHP on the store? no? use starting hp. yes? use store's.
		// var yourOriginalHP = STORE._get('yHP') ? STORE._get('oHP') : Enemies[enemyName].HP 
		// ^^ try using a ternary statement for this....

		var oATK = Enemies[enemyName].ATK
		var oDEF = Enemies[enemyName].DEF
			// oATK: Enemies[enemyName].ATK,
			// oDEF: Enemies[enemyName].DEF
		var oDMG = {}
		oDMG = yATK - oDEF
		var yDMG = {}
		yDMG = oATK - yDEF

		STORE._set({
			oHP: originalHP - oDMG
			yHP: yHP - yDMG
		})

		// _incrementStat: function(statName) {
		// var newData = {}
		// newData[statName] = STORE._get(statName) + 1
		// STORE._set(newData)
		// STORE._set({
		// 	flashingStats: [statName,'Miles Traveled']
		// })
		// STORE.trigger('flash')
		// actually set a new value for the stat
		// set the flashingStat on the store to be the stat name of what was just updated
	}
}
export default ACTION