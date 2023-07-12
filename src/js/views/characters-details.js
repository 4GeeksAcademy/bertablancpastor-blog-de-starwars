import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const CharactersDetails = () => {
    const { store, actions } = useContext(Context);
    const params = useParams()

    useEffect(() => {
		actions.getCharacter(params.charactersId)

	}, []);


    return (
        <>
        <h1>Characters details</h1>
        <p>{store.character.properties?.name}</p>
        <p>{store.character.properties?.birth_year}</p>
    

        </>
		
	);
};
