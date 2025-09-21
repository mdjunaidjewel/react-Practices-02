
import React, { use, useState } from 'react'
import Country from '../Country/Country';

export default function Countries({ countriesPromise }) {

    const countries = use(countriesPromise);
    const countriesData = countries.countries
  // console.log(countriesData)
  
  const [visitedCountries, setVisitedCountries] = useState([])

  const handleVisitedCountries = (countryData) => {
    
    // console.log("Handle visited Coutry clicked", countryData)
    const newVisitedCountry = [...visitedCountries, countryData];
    setVisitedCountries(newVisitedCountry)
    
  }

    return (
      <div>
        <h2 className="text-3xl font-semibold py-4 text-blue-600">
          Here Countries: {countriesData.length}
        </h2>
        <h3 className="text-2xl font-medium">
          Visited Countries: {visitedCountries.length}
        </h3>
        <div className="sm:grid grid-cols-3 gap-5">
          {countriesData.map((countryData) => (
            <Country
              key={countryData.ccn3.ccn3}
              countryData={countryData}
              handleVisitedCountries={handleVisitedCountries}
            ></Country>
          ))}
        </div>
      </div>
    );
}
