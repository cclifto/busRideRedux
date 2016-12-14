import React from 'react'
import ACTION from "../action"

const Button = React.createClass({
	getInitialState: function() {
		return {
			cooldownWidth: 0,
			buttonAvailable: true
		}
	},

	_concludeCooldown: function() {
		this.setState({
			buttonAvailable: true
		})
	},

	_getWidthChange: function() {
		return 1600/this.props.cooldownTime
	},

	_initCooldown: function(event) {
		//exit if disabled
		if (!this.state.buttonAvailable) {
			ACTION
			return 
		}
		//action to modify store
		ACTION
		var actionName = this.props.action
		ACTION[actionName]()


		//cooldown animation
		this.setState({
			buttonAvailable: false,
			cooldownWidth: 100
		})

		var reduceCooldown = () => {
			ACTION
			if (this.state.cooldownWidth > 0) {
				this.setState({
					cooldownWidth: this.state.cooldownWidth - this._getWidthChange()
				})
				setTimeout(reduceCooldown,17)
				return
			}
			this._concludeCooldown()
		}
		setTimeout(reduceCooldown, 17)
	},

	render: function() {
		var cooldownStyle = {width: this.state.cooldownWidth + '%'}
		return (
			<button className={this.state.buttonAvailable ? '' : 'disabled'} onClick={this._initCooldown}>
				{this.props.text}
				<div style={cooldownStyle} className="cooldown"></div>
			</button>
			)
	}
})

export default Button