import React, {useEffect, useState} from 'react';
import {IPlanet} from "../../model/planet.model";
import service from "../../service/service";
import Spinner from "../../components/spinner";
import Button from "../../components/button";
import Planet from "./planet";
import Filter, {IFilter} from "./filter";


const Planets = () => {
    const [loading, setLoading] = useState(false);
    const [planets, setPlanets] = useState<IPlanet[]>([]);
    const [filterPlanets, setFilterPlanets] = useState<IPlanet[]>([]);
    const [page, setPage] = useState({count: 0, page: 1});

    const [filters, setFilters] = useState<IFilter>({
        name: '',
        climate: '',
        gravity: ''
    });

    const getPlanets= () => {
        setLoading(true);
        service.getPlanets(page.page).then(resp => {
            setPlanets([...planets, ...resp.data.results]);
            setPage({ count: resp.data.count, page: page.page + 1 });
        }).finally(() => setLoading(false));
    }

    useEffect(() => {
        getPlanets();
    }, []);


    useEffect(() => {
        const filtered = filters.name !== '' ? planets.filter(p => p.name.toLowerCase().includes(filters.name.toLowerCase())) : planets;
        setFilterPlanets(filtered);
    }, [planets, filters]);


    return (
        <>
            <h5 className='card-title'>{`Planets [showing: ${planets.length}/${page.count}]`}</h5>
            <Filter onFiltersChange={(filters) => setFilters(filters)} filters={filters} />
            <div className="row">
                {filterPlanets.map(planet => (
                    <Planet key={planet.name} planetItem={planet} />
                ))}
            </div>
            {loading && <Spinner />}
            {!loading && planets.length < page.count && <div className="d-flex justify-content-center align-items-center mt-3 mb-3">
                <Button text={"Load more"} onClick={() => getPlanets()}/>
            </div>}
        </>
    );
};

export default Planets;