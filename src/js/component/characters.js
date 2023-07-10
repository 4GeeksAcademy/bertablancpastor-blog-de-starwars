import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import { Context } from "../store/appContext"

export const Characters = () => {

    const { store, actions } = useContext(Context);

    const charactersMap = store.characters;

    return (
        <div className="m-5  ">
            <h2 className="text-danger ms-5 d-flex justify-content-start">
                Characters
            </h2>
            <div className="d-flex overflow-x-auto">{charactersMap.map(item => (
                <Card
                    id={item.uid}
                    key={item.uid}
                    name={item.name}
                />
            ))}
            </div>

        </div>
    );
};



