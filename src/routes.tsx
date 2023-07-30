import React from 'react';
import Planets from "./pages/planets/planets";
import Starships from "./pages/starships";
import People from "./pages/people";
import Films from "./pages/films";
import Favorites from "./pages/favorites";
import {Routes as NavRoutes, Route, Navigate} from 'react-router-dom';
import PlanetDetail from "./pages/planets/planet-detail";

const Routes = () => {
    return (
        <NavRoutes>
            <Route path="/planets" element={<Planets />} />
            <Route path="/planets/:name" element={<PlanetDetail />} />
            <Route path="/starships" element={<Starships/>} />
            <Route path="/people" element={<People />} />
            <Route path="/films" element={<Films />} />
            <Route path="/favorites" element={ <Favorites />} />
            <Route
                path="/"
                element={<Navigate to="/planets" replace />}
            />
        </NavRoutes>
    );
};

export default Routes;