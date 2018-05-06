import React from "react";
import MoviePreview from "./preview_video";

export default props => {
	const { info } = props;

	console.log("movie info: ", props.info);

	const moreMovieInfo = info["link"][0]["attributes"].href;
	const moviePreviewLink = info["link"][1]["attributes"].href;

	return (
		<div className="container">
			<div className="row">
				<img src={info["im:image"][2].label} />
				<MoviePreview />
				<h3>{info["im:name"].label}</h3>
				<p>{info["summary"].label}</p>
				<a href={moreMovieInfo} />
				<a href={moviePreviewLink} />
			</div>
		</div>
	);
};
