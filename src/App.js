import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Choose from "./components/Choose";
import Home from "./components/Home";
import "./scss/_index.scss";
import Services from "./components/Services";
import Categories from "./components/Categories";
import Recommended from "./components/Recommended";
import Products from "./components/Products";
import Promo from "./components/Promo";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import scrollreveal from "scrollreveal";

function App() {
	const [theme, setTheme] = useState("s");
	const changeTheme = () => {
		theme === "dark" ? setTheme("light") : setTheme("dark");
	};
	useEffect(() => {
		const registerAnimations = () => {
			const sr = scrollreveal({
				origin: "bottom",
				distance: "80px",
				duration: 1000,
				reset: false,
			});
			sr.reveal(
				`
        nav,
        .home,
        .services-container,
        .categories-container,
        .recommend-container,
        .choose-us-container,
        .products-container,
        .promo-container,
        footer
    `,
				{
					interval: 500,
				}
			);
		};
		registerAnimations();
	}, []);
	window.setTimeout(() => {
		const home = document.getElementsByClassName("home");
		home[0].style.transform = "none";
	}, 1500);
	return (
		<div data-theme={theme} className="app">
			{/* <ScrollToTop /> */}
			<NavBar changeTheme={changeTheme} currentTheme={theme} />
			<Home />
			<Services />
			<Categories />
			<Recommended />
			<Choose />
			<Products />
			<Promo />
			<Footer />
		</div>
	);
}

export default App;
