import React, {useState} from 'react';
import {IPlanet} from "../model/planet.model";


const FavButton = ({item}: {item: IPlanet}) => {

    const getIsFav = (items?: any[]) => {
        if(items) {
            return items.find((x: any) => x.name == item.name) !== undefined
        }
        return JSON.parse(localStorage.getItem('items') || "[]").find((x: any) => x.name == item.name) !== undefined;
    }

    const [isFav, setIsFav] = useState(getIsFav());


    const handleFav = () => {
        let newItems = JSON.parse(localStorage.getItem('items') || "[]");
        if (isFav) {
            newItems = newItems.filter((x: any) => x.name !== item.name);
        } else {
            newItems = [...newItems, item]
        }
        localStorage.setItem('items', JSON.stringify(newItems));
        setIsFav(getIsFav(newItems));
    }

    return (
        <button type="button" onClick={handleFav} className={isFav ? "btn btn-warning" : "btn btn-outline-warning"}>{isFav ? "Unfav" : "Fav"}</button>
    );
};

export default FavButton;