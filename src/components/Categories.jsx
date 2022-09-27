import React from "react";
import category1 from "../assets/notebook-icon.png";
import category2 from "../assets/smartphone-icon.png";
import category3 from "../assets/monitor-icon.png";
import category4 from "../assets/sound-icon.png";
import category5 from "../assets/camera-icon.png";
import category6 from "../assets/tablet-icon.png";
import category7 from "../assets/watch-icon.png";
import category8 from "../assets/tv-icon.png";

const Categories = () => {
	const categories = [
		{
			image: category1,
			title: "Notebooks",
			description: "290K Art.",
		},
		{
			image: category2,
			title: "Celulares",
			description: "3M Art.",
		},
		{
			image: category3,
			title: "Monitores",
			description: "1.2M Art.",
		},
		{
			image: category4,
			title: "Audio",
			description: "751K Art.",
		},
		{
			image: category5,
			title: "Fotografía",
			description: "1.0M Art.",
		},
		{
			image: category6,
			title: "Tablets",
			description: "88K Art.",
		},
		{
			image: category7,
			title: "Smartwatches",
			description: "761K Art.",
		},
		{
			image: category8,
			title: "Smart Tvs",
			description: "2.9K Art.",
		},
	];

	return (
		<div className="categories-container mx-3 py-3">
			<div className="container">
				<div className="title-container">
					<h2>Categorias</h2>
				</div>
				<div className="categories">
					{categories.map(({ image, title, description }, index) => {
						return (
							<div className="category" key={index}>
								<img src={image} alt="Category" />
								<h4>{title}</h4>
								<p>{description}</p>
							</div>
						);
					})}
				</div>
				<button>Mostrar todo</button>
			</div>
		</div>
	);
};

export default Categories;
