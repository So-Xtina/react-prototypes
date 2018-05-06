import React from "react";
import { Player } from "video-react";
import "./styles.css";

export default props => {
	const { info } = props;
	const moviePre = info["link"][1]["attributes"]["href"];

	return <Player className="video" playsInline src={moviePre} />;
};
