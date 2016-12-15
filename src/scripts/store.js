import Backbone from 'backbone'
import _ from 'underscore'
import TextAndChoices from './textAndChoices'

const STORE = _.extend(Backbone.Events,{
	_data: {
		oHP: null,
		HP: 10,
		ATK: 4,
		DEF: 5,
		INT: 4,
		LUV: 1,
		'Miles Traveled': 0,
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
				cooldownTime: 3000,
				text: 'Talk To Neighbor',
				action: '_talkToNeighbor'
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