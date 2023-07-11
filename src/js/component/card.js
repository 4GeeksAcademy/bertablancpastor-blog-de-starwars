import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imgGrey from "../../img/img.png";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const Card = props => {
    const { store, actions } = useContext(Context);

    return (

        <div className="me-3 my-3">
            <div className="card" style={{ width: "18rem" }}>
                <img className="" src={props.id === "1" ? props.type === "planets" ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : "https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg" : "https://starwars-visualguide.com/assets/img/"+props.type + "/" + props.id + ".jpg"} />
                

                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.gender}</p>
                    <p className="card-text">{props.hair_color}</p>
                    <p className="card-text">{props.eye_color}</p>
                    <div className="d-flex justify-content-between">
                        <a href="#" className="btn btn-outline-primary">Learn more!</a>
                        <a href="#" className="btn btn-outline-warning"><i className="fa-regular fa-heart" style={{ color: "#fdf51c" }}></i></a>
                    </div>
                </div>
            </div>
        </div>

    );
};


/**
 * Define the data-types for
 * your component's properties
 **/
Card.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    id: PropTypes.string,
};
