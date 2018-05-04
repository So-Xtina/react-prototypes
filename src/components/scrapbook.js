import React, { Component } from "react";
import "./scrapbook.css";
import imageData from "./image_data";
import ScrapbookImage from "./scrapbook_images";

export default props => {
	const images = imageData.map((img, index) => {
		return <ScrapbookImage key={index} about={img} />;
	});

	return <div className="scrapbook-container">{images}</div>;
};
