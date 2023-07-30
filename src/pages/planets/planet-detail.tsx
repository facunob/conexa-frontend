import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {IPlanet} from "../../model/planet.model";
import Button from "../../components/button";
import FavButton from "../../components/fav-button";

const PlanetDetail = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const planet: IPlanet = location.state.planet;

    return (
        <>
            <div className="d-flex justify-content-between">
                <Button text={"Back"} onClick={() => navigate(-1)} />
                <FavButton item={planet} />
            </div>
            <ul className="list-group mt-2">
                <li className="list-group-item active">Planet: {planet.name}</li>
                <li className="list-group-item">Gravity: {planet.gravity}</li>
                <li className="list-group-item">Climate: {planet.climate}</li>
                <li className="list-group-item">Terrain: {planet.terrain}</li>
                <li className="list-group-item">Population: {planet.population}</li>
                <li className="list-group-item">Orbital period: {planet.orbital_period}</li>
                <li className="list-group-item">Rotation period: {planet.rotation_period}</li>
            </ul>
        </>
    );
};

export default PlanetDetail;