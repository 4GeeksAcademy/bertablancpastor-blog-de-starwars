import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import imgGrey from "../../img/img.png";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";


export const Card = props => {
    const { store, actions } = useContext(Context);

    return (

        <div className="container">
            <div className="card" style={{ width: "18rem" }}>
                <img className=""  src={imgGrey} />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.gender}</p>
                    <p className="card-text">{props.hair_color}</p>
                    <p className="card-text">{props.eye_color}</p>
                    <a href="#" className="btn btn-primary">Learn more!</a>
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
    id: PropTypes.string
};
