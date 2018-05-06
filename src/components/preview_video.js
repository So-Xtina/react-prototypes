import React from "react";
import { Player } from "video-react";

export default props => {
	const { info } = props;
	const moviePre = info["link"][1]["attributes"]["im:assetType"];

	return <Player playsInline src={moviePre} />;
};
