import React from "react";
import MoviePreview from "./preview_video";
import "./styles.css";

export default props => {
	const { info } = props;

	console.log("movie info: ", props.info);

	const moreMovieInfo = info["link"][0]["attributes"]["href"];
	const moviePreviewLink = info["link"][1]["attributes"]["href"];

	return (
		<div className="container">
			<MoviePreview info={info} />
			<div className="text-center">
				<div>
					<img src={info["im:image"][2].label} />
				</div>
				<div>
					<h3>{info["im:name"].label}</h3>
					<p>{info["summary"].label}</p>
					<a target="_blank" href={moreMovieInfo}>
						Info
					</a>
					<a target="_blank" href={moviePreviewLink}>
						Preview
					</a>
				</div>
			</div>
		</div>
	);
};
