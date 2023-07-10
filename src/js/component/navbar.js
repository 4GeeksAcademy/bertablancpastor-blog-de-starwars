import React from "react";
import { Link } from "react-router-dom";
import logoStarwars from "../../img/Star-Wars-Logo-5.png";

export const Navbar = () => {
	return (
		
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="p-1 ms-5" style={{height: "40px", }} src={logoStarwars}/>
				</span>
			</Link>
			<div className="me-5">
				<Link to="/demo">
					<div className="dropdown">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							<li className="dropdown-item"></li>
							<li className="dropdown-item"></li>
							<li className="dropdown-item"></li>
						</ul>
					</div>
				</Link>
			</div>
		</nav>
	
	);
};
