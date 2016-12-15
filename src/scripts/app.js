import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import AppView from './views/appView'
import init from './init'

const app = function() {

	var Controller = Backbone.Router.extend({
		routes: {
			'home': 'handleHome',
			'*default': 'handleDefault'
		},
		handleHome: function(){
			ReactDOM.render(<AppView />, document.querySelector(".container"))
		},
		handleDefault: function(){
			location.hash = 'home'
		},
		initialize: function(){
			Backbone.history.start()
		}
	})
	var controller = new Controller();
}








// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..