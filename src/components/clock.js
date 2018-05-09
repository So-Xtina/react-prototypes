import React, { Component } from "react";
import { connect } from "react-redux";
import { updateTime } from "../actions/index";

class Clock extends Component {
	componentWillMount() {
		setInterval(this.props.updateTime, 1000);
	}

	render() {
		return (
			<div className="text-center mt-5">
				<h1>{this.props.time}</h1>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		time: state.clock.time
	};
}

export default connect(mapStateToProps, { updateTime: updateTime })(Clock);
