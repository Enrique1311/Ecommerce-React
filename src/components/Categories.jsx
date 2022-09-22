import React from "react";
import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.png";
import category7 from "../assets/category7.png";
import category8 from "../assets/category8.png";

const Categories = () => {
	const categories = [
		{
			image: category1,
			title: "Notebooks",
			description: "290K Artículos",
		},
		{
			image: category2,
			title: "Celulares",
			description: "3M Artículos",
		},
		{
			image: category3,
			title: "Monitores",
			description: "1.2M Artículos",
		},
		{
			image: category4,
			title: "Audio",
			description: "751K Artículos",
		},
		{
			image: category5,
			title: "Fotografía",
			description: "1.0M Artículos",
		},
		{
			image: category6,
			title: "Tablets",
			description: "88K Artículos",
		},
		{
			image: category7,
			title: "Smartwatches",
			description: "761K Artículos",
		},
		{
			image: category8,
			title: "Smart Tvs",
			description: "2.9K Artículos",
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
								<img src={image} alt="Category" width={120} height={90} />
								<h5>{title}</h5>
								<p>{description}</p>
							</div>
						);
					})}
				</div>
				<button>Show All</button>
			</div>
		</div>
	);
};

export default Categories;
