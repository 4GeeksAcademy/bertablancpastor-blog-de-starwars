import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Card } from "./card";
import { Context } from "../store/appContext"

export const Planets = () => {
    const { store, actions } = useContext(Context);

    const planetsMap = store.planets;


    return (
        <div className="m-5  ">
            <h2 className="text-danger ms-5 d-flex justify-content-start">
                Planets
            </h2>
            <div className="d-flex overflow-x-auto">{planetsMap.map(item => (
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