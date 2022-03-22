import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name,region, population, area, flags } = props.country;
    return (
        <div className='country-design'>
            <h2>Country Name: {name.common}</h2>
            <h3>Population: {population}</h3>
            <h3>Area: {area} KM</h3>
            <h3>Region: {region} KM</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;