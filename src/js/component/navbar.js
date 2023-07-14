import React, { useEffect, useContext, useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";
import logoStarwars from "../../img/Star-Wars-Logo-5.png";
import { Context } from "../store/appContext"


export const Navbar = (props) => {

	const { store, actions } = useContext(Context);
	const favoritesMap = store.favorites;


	return (

		<nav className="navbar navbar-light bg-light fixed-top mb-3 ">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img className="p-1 ms-5" style={{ height: "40px", }} src={logoStarwars} />
				</span>
			</Link>
			<div className="me-5">
				
					<div className="dropdown me-5">
						<button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
							<span className="btn btn-primary text-ligth">{favoritesMap.length > 0 ? favoritesMap.length : " " }</span>
						</button>
						<ul className="dropdown-menu ">
							{favoritesMap.map((item, i) => (
								<li key={i} className="dropdown-item d-flex justify-content-between">
									{item}
									<span onClick={() => actions.deleteFavorite(item)}>
									<i className="fa-solid fa-trash "></i>
									</span>
								</li>
							))}
						</ul>
					</div>
				
			</div>
		</nav>

	);
};

