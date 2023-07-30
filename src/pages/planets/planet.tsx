import React from 'react';
import {IPlanet} from "../../model/planet.model";
import {useNavigate} from "react-router-dom";
import Button from "../../components/button";
import FavButton from "../../components/fav-button";


interface IPlanetProps {
    planetItem: IPlanet;
}

const Planet = ({planetItem}: IPlanetProps) => {
    const navigate = useNavigate();

    const goToDetail = () => {
        navigate(`/planets/${planetItem.name}`, { state: {planet: planetItem} })
    }


    return (
        <div className="col mb-3" key={planetItem.name}>
            <div className="card" style={{ minWidth: '200px', maxWidth: '300px', height: '350px' }}>
                <div className="card-body">
                    <h5 className='card-title'>{planetItem.name}</h5>
                    <hr />
                    <p>Population: {planetItem.population}</p>
                    <p>Climate: {planetItem.climate}</p>
                    <p>Gravity: {planetItem.gravity}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <Button text={"Detail"} onClick={goToDetail} />
                    <FavButton item={planetItem} />
                </div>
            </div>
        </div>
    );
};

export default Planet;