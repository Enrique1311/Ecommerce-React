import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { ImSun } from "react-icons/im";
import { BsFillMoonFill } from "react-icons/bs";

const NavBar = ({ changeTheme, currentTheme }) => {
	const [navState, setNavState] = useState(false);

	const html = document.querySelector("html");

	html.addEventListener("click", () => setNavState(!navState));

	return (
		<nav>
			<div className="navbar-container">
				<div className="logo">
					<p>Ecom</p>
				</div>
				<div
					className="links-container"
					onClick={(e) => e.stopPropagation()}
				>
					<div className="toggle">
						{navState ? (
							<MdClose onClick={() => setNavState(!navState)} />
						) : (
							<GiHamburgerMenu
								onClick={(e) => {
									e.stopPropagation();
									setNavState(!navState);
								}}
							/>
						)}
						<div onClick={changeTheme}>
							{currentTheme === "dark" ? (
								<ImSun className="sun" />
							) : (
								<BsFillMoonFill className="moon" />
							)}
						</div>
					</div>
					<div className={`links ${navState ? "responsive-toggle" : ""}`}>
						<ul>
							<li>
								<a href="#">Inicio</a>
							</li>
							<li>
								<a href="#">Servicios</a>
							</li>
							<li>
								<a href="#">Categorías</a>
							</li>
							<li>
								<a href="#">Carrito</a>
							</li>
							<li>
								<a href="#">Ayuda</a>
							</li>
							<li
								onClick={changeTheme}
								className="color-mode"
							>
								{currentTheme === "dark" ? (
									<ImSun className="sun" />
								) : (
									<BsFillMoonFill className="moon" />
								)}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default NavBar;
