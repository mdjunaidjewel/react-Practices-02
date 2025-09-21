
import React, { use } from 'react'
import Country from '../Country/Country';

export default function Countries({ countriesPromise }) {

    const countries = use(countriesPromise);
    const countriesData = countries.countries
    // console.log(countriesData)

    return (
        <div>
            <h2 className='text-3xl font-semibold py-4 text-blue-600'>Here Countries: { countriesData.length }</h2>
        <div className="sm:grid grid-cols-3 gap-5">
          {countriesData.map((countryData) => (
            <Country
              key={countryData.ccn3.ccn3}
              countryData={countryData}
            ></Country>
          ))}
        </div>
      </div>
    );
}
