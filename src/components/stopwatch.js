import React, { Component } from "react";
import Time from "./format_time";
import Table from "./table_laps";

class Stopwatch extends Component {
	constructor(props) {
		super(props);

		this.state = {
			status: "stopped",
			start: null,
			elapsed: 0,
			laps: []
		};

		this.start = this.start.bind(this);
		this.stop = this.stop.bind(this);
		this.update = this.update.bind(this);
		this.reset = this.reset.bind(this);
		this.lap = this.lap.bind(this);
	}

	start() {
		const { start, elapsed } = this.state;
		let newStart = new Date().getTime();

		if (start) {
			newStart -= elapsed;
		}

		this.setState({
			status: "running",
			start: newStart,
			laps: []
		});

		setTimeout(this.update, 10);
	}

	stop() {
		this.setState({
			status: "stopped"
		});
	}

	lap() {
		const { status, start, elapsed, laps } = this.state;
		if (status === "running") {
			let lap = new Date().getTime();
			let lapStart = null;
			if (this.state.lapStart === undefined) {
				lapStart = start;
			} else {
				lapStart = new Date().getTime();
			}
			lap = lap - lapStart;
			laps.push(lap);

			this.setState({
				laps: laps,
				lapStart: lapStart
			});
		}
	}

	update() {
		const { status, start } = this.state;

		if (status === "running") {
			this.setState({
				elapsed: new Date().getTime() - start
			});

			setTimeout(this.update, 10);
		}
	}

	reset() {
		this.setState({
			status: "stopped",
			start: null,
			elapsed: 0,
			laps: []
		});
	}

	render() {
		const { laps, elapsed, status } = this.state;

		return (
			<div className="jumbotron">
				<h1 className="display-3">
					<Time elapsed={elapsed} />
				</h1>
				<hr className="my-3" />
				<p className="lead text-center">{status}</p>
				<p className="text-center">
					<button className="btn btn-outline-primary mx-3" onClick={this.lap}>
						Lap
					</button>
					<button className="btn btn-outline-success mx-3" onClick={this.start}>
						Start
					</button>
					<button className="btn btn-outline-danger mx-3" onClick={this.stop}>
						Stop
					</button>
					<button className="btn btn-outline-warning mx-3" onClick={this.reset}>
						Reset
					</button>
				</p>
				<Table data={laps} />
			</div>
		);
	}
}

export default Stopwatch;
