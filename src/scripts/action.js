import STORE from "./store"
import TextAndChoices from "./textandchoices"
//below is the import syntax when importing something by name from a file,
//and that thing is not the default export

// ACTION[this.props.clickHandler]()


console.log('file reading')
var ACTION = {
	_incrementMiles: function(input){
		console.log("okie dokie")
		STORE._set({
			'Miles Traveled': STORE._get('Miles Traveled') + input
		})
		if(STORE._data['Miles Traveled'] >= 10){
			ACTION._triggerDevil()
		}
		if(STORE._data['Miles Traveled'] === 3){
			ACTION._firstNeighborTalk()
		}
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

	_readBook: function(buttonValue){
		console.log("reading")
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
		console.log("loadfromslot")
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
		console.log("savetoSlot")
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
	}	
}
export default ACTION