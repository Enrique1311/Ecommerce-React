import React from "react";
import { BiSearch } from "react-icons/bi";
import home from "../assets/home-image.png";

const Home = () => {
	return (
		<div className="home">
			<div className="container mx-3 py-3">
				<div className="title-container">
					<h2>Encuentra miles de productos de tecnología para ti</h2>
					<div className="input-container">
						<input type="text" placeholder="¿Qué deseas comprar?" />
						<div className="icon">
							<BiSearch />
						</div>
					</div>
				</div>
				<div className="extra-image">
					<img src={home} alt="Home" />
				</div>
			</div>
		</div>
	);
};

export default Home;
