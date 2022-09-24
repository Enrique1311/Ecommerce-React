import React from "react";
import recommended1 from "../assets/recommended1.jpg";
import recommended2 from "../assets/recommended2.png";
import recommended3 from "../assets/recommended3.jpg";
import recommended4 from "../assets/recommended4.png";

const Recommended = () => {
	const data = [
		{
			image: recommended1,
			text: "¡Una Notebook velóz al mejor precio!",
		},
		{
			image: recommended2,
			text: "¡Un Smartphone potente y con buena memoria!",
		},
		{
			image: recommended3,
			text: "¡Un Smart TV UltraHD con un precio accesible!",
		},
		{
			image: recommended4,
			text: "¡Para tomar las mejores fotos en tus viajes!",
		},
	];

	return (
		<div className="recommended-container mx-3 py-3">
			<div className="container">
				<div className="title-container">
					<h2>Recomendados para tí</h2>
				</div>
				<div className="categories">
					{data.map(({ image, text }, index) => {
						return (
							<div className="category" key={index}>
								<img src={image} alt="Category" />
								<h4>{text}</h4>
							</div>
						);
					})}
				</div>
				<button>Mostrar todo</button>
			</div>
		</div>
	);
};

export default Recommended;
