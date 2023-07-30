import React, {useEffect, useState} from 'react';
import Planet from "./planets/planet";

const Favorites = () => {
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        let items = JSON.parse(localStorage.getItem('items') || "[]");
        setItems(items);
    }, []);

    return (
        <>
            <h5 className='card-title mb-4'>{`Favorite Planets`}</h5>
            <div className="row">
                {items.map(planet => (
                    <Planet key={planet.name} planetItem={planet} />
                ))}
            </div>
        </>
    );
};

export default Favorites;