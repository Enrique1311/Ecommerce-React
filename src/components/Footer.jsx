import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
	const data = [
		{
			type: "Productos",
			subTypes: ["Categorías", "Recomendados", "Promociones", "Descuentos"],
		},
		{
			type: "Servicios",
			subTypes: ["Envíos gratis", "Comparador", "Asesoramiento", "Soporte"],
		},
		{
			type: "Nosotros",
			subTypes: ["Sobre nosotros", "Locales", "Términos"],
		},
		{
			type: "Más",
			subTypes: ["Documentación", "Licencia"],
		},
	];
	const socialLinks = [
		<BsFacebook />,
		<BsInstagram />,
		<BsTwitter />,
		<BsLinkedin />,
	];
	return (
		<footer className="py-3 mx-3">
			<div className="brand-container">
				<div className="brand">
					<span>Tech</span>
					<span className="dot">.ecomm</span>
				</div>
				<p className="description">Nuestras redes sociales</p>
				<ul className="social-links">
					{socialLinks.map((link, index) => (
						<li key={index}>{link}</li>
					))}
				</ul>
			</div>
			<div className="links">
				{data.map(({ type, subTypes }, index) => {
					return (
						<div className="link" key={index}>
							<h3 className="title">{type}</h3>
							<ul>
								{subTypes.map((type, index) => (
									<li key={index}>
										<a href="#">{type}</a>
									</li>
								))}
							</ul>
						</div>
					);
				})}
			</div>
		</footer>
	);
};

export default Footer;
