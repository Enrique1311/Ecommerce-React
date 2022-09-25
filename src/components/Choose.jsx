import React from "react";
import choose from "../assets/choose.png";
import choose1 from "../assets/choose1.png";
import choose2 from "../assets/choose2.png";
import choose3 from "../assets/choose3.png";
import choose4 from "../assets/choose4.png";

const Choose = () => {
	const data = [
		{
			image: choose1,
			title: "Stock garantizado",
			description: "Te aseguramos stock de todos los productos publicados.",
		},
		{
			image: choose2,
			title: "100% Seguro",
			description: "Las compras que haces con nosotros son 100% seguras.",
		},
		{
			image: choose3,
			title: "Soporte 24/7",
			description:
				"Ante cualquier duda o problema con nuestra plataforma te puedes contactar con nuestro servicio de soporte.",
		},
		{
			image: choose4,
			title: "Envío gratis",
			description:
				"En cualquier lugar que estés recibirás tu compra de manera rápida y gratuita.",
		},
	];
	return (
		<div className="choose-us-container mx-3 py-3">
			<div className="container">
				<div className="title-container">
					<h2>¡Razones para elegirnos antes que a otros!</h2>
					<p>
						Algunas razones por la que los clientes nos eligen antes que a otro
						ecommerce. ¡Te damos servicios que otros no!
					</p>
				</div>
				<div className="content">
					<div className="choose-us">
						{data.map(({ image, title, description }, index) => {
							return (
								<div className="choose" key={index}>
									<img src={image} alt="choose" />
									<h4>{title}</h4>
									<p>{description}</p>
								</div>
							);
						})}
					</div>
					<div className="delivery">
						<img src={choose} alt="delivery" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Choose;
