import React from "react";
import promo from "../assets/promo.png";

const Promo = () => {
	return (
		<div className="promo-container">
			<div className="container mx-3 py-3">
				<div className="content">
					<div className="title-container">
						<h2>No te pierdas Nuestras Promociones</h2>
						<p>
							Siempre damos a nuestros clientes subscriptos una promoción.
							¡Subscríbete ahora!
						</p>
					</div>
					<div className="subscribe-container">
						<input type="email" placeholder="yourname@mail.com" />
						<button>Subscribirme</button>
					</div>
				</div>
				<div className="promo-image">
					<img src={promo} alt="Promo" />
				</div>
			</div>
		</div>
	);
};

export default Promo;
