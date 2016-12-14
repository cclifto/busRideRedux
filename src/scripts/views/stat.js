import React from "react"
import ACTION from '../action'
import STORE from '../store'

const Stat = React.createClass({

	getInitialState: function(){
		return {
			flashOpacity: 0
		}
	},

	componentWillMount: function() {
		var initiateFlash = () => {
			if (STORE._get('flashingStats').includes(this.props.statName)) { // am I the flashing stat???
				this.setState({
					flashOpacity: 1
				})
				setTimeout(()=>{
					this._decreaseFlashOpacity()
				},50)
			}
		}
		STORE.on('flash',initiateFlash)
	},

	_decreaseFlashOpacity: function() {
		if (this.state.flashOpacity > 0) {
			this.setState({
				flashOpacity: this.state.flashOpacity - .016
			})
			setTimeout(()=>{
				this._decreaseFlashOpacity()
			},16.67)			
		}
		else {
			ACTION._unflash()
		}
	},
	// flashprop: this.state.isFlashing:int ? <p className="flashing"> : <p>

	render: function(){
		var flashStyle = {opacity: this.state.flashOpacity}
		var cl = this.props.flashingStat === this.props.statName ? 'flashing' : ''
		return <p className={cl} >{this.props.statName}: {this.props.statVal}
					<span style={flashStyle} className="flash"></span>
				</p>
	}
})

export default Stat