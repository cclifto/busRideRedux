import Backbone from 'backbone'
import _ from 'underscore'
import TextAndChoices from './textAndChoices'

const STORE = _.extend(Backbone.Events,{
	_data: {
		oHP: null,
		oATK: null,
		oDEF: null,
		STRENGTH: 0,
		KNOWLEDGE: 0,
		'DISHES CLEANED': 0,
		'HEALTHINESS': 0,
		'CHORES DONE': 0,
		event_display_text: "",
		currentEnemy: "",
		event_choices:[],
		event_showing: false,
		combat_display_text: "",
		combat_choices:[],
		combat_showing: false,
		flashingStats: [],
		actionButtons: [ 
			{
				text: 'Do Push Ups',
				action: '_doPushUps'
			},
			{
				text: 'Read a Book',
				action: '_readABook'
			},
			{
				text: 'Clean Some Dishes',
				action: '_cleanDishes'
			},
			{
				text: 'Eat Vegetables',
				action: '_eatVeggies'
			}

		]
	},
	_getData: function() {
		return this._data
	},
	_get: function(key) {
		return this._data[key]
	},
	_emitChange: function() {
		this.trigger('STOREChange')
	},
	_set: function(obj) {
		
		this._data = _.extend(this._data, obj)
		this._emitChange()
		
	}
})


export default STORE