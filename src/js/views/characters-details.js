import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

import "../../styles/demo.css";

export const CharactersDetails = props => {
    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
        actions.getCharacter(params.charactersId)

    }, []);


    return (
        <>
            <div className="container">
                <div className="d-flex">
                    <div className="bg bg-secondary" style={{ width: "600px", height: "400px" }}>
                        {/* <img className="" src={props.id === "1" ? props.type === "planets" ? "https://starwars-visualguide.com/assets/img/placeholder.jpg" : "https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg" : "https://starwars-visualguide.com/assets/img/"+ props.type + "/" + props.id + ".jpg"} /> */}
                    </div>
                    <div>
                        <h1 className="text-center">{store.character.properties?.name}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nibh aliquam, mattis ligula eget, lobortis enim. Integer et nisi pharetra, fringilla libero sit amet, porttitor odio. Sed posuere tellus non viverra congue. Cras tempus tortor eu mi porta, quis facilisis nunc mollis. Cras diam enim, cursus in bibendum vel, blandit non sem. Cras a molestie enim. Sed finibus tempor nisl at tempus. Cras ultrices magna sed enim vestibulum suscipit.
                        </p>
                    </div>
                </div>
                <hr className="text-danger"></hr>
                <div className="container text-center text-danger">
                    <div className="row">
                        <div className="col-2">
                            Name
                        </div>
                        <div className="col-2">
                            Birth Year
                        </div>
                        <div className="col-2">
                            Gender
                        </div>
                        <div className="col-2">
                            Height
                        </div>
                        <div className="col-2">
                            Skin Color
                        </div>
                        <div className="col-2">
                            Eye Color
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            {store.character.properties?.name}
                        </div>
                        <div className="col-2">
                            {store.character.properties?.birth_year}
                        </div>
                        <div className="col-2">
                            {store.character.properties?.gender}
                        </div>
                        <div className="col-2">
                            {store.character.properties?.height}
                        </div>
                        <div className="col-2">
                            {store.character.properties?.skin_color}
                        </div>
                        <div className="col-2">
                            {store.character.properties?.eye_color}
                        </div>
                    </div>
                </div>

            </div>

        </>

    );
};

CharactersDetails.propTypes = {
    name: PropTypes.string,
    gender: PropTypes.string,
    hair_color: PropTypes.string,
    eye_color: PropTypes.string,
    height: PropTypes.string,
    skin_color: PropTypes.string,
    id: PropTypes.string,
    route: PropTypes.string
};

