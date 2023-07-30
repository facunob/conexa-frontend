import React from 'react';
import Button from "../components/button";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
    const navigage = useNavigate();

    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <h1 className="navbar-brand">Conexa - Stars Wars</h1>
                <div>
                    <Button text={"Planets"} onClick={() => navigage("/planets")} />
                    <Button text={"People"} onClick={() => navigage("/people")} />
                    <Button text={"Starships"} onClick={() => navigage("/starships")} />
                    <Button text={"Films"} onClick={() => navigage("/films")} />
                    <Button text={"Favorites"} onClick={() => navigage("/favorites")} />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;