import React from 'react';

export interface IFilter {
    name: string;
    climate: string;
    gravity: string;
}

const Filter = ({onFiltersChange, filters}: {onFiltersChange: (filters: IFilter) => void, filters: IFilter}) => {

    const handleInput = (e: any) => {
        const newFilters = {
            ...filters,
            [e.target.name]: e.target.value
        };
       onFiltersChange(newFilters)
    }

    return (
        <>
            <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Name</span>
                </div>
                <input type="text" name="name" onChange={handleInput} className="form-control" value={filters.name} aria-label="Small" aria-describedby="inputGroup-sizing-sm" />
            </div>
        </>
    );
};

export default Filter;