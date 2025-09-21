import React, { useState } from 'react'

export default function Country({ countryData, handleVisitedCountries }) {
  // console.log(countryData)
  const { name, population, flags } = countryData;

  const [visited, setVisited] = useState(false);

  const visiteHandler = () => {
    // setVisited(true)
    // 1.System (its Basics System)
    // if (visited) {
    //     setVisited(false)
    // }
    // else {
    //     setVisited(true)
    // }
    // 2.System
    // setVisited(visited ? false: true)

    // 3.System
      setVisited(!visited);
      handleVisitedCountries(countryData);
  };
  return (
    <div
      className={`my-5 w-[300px] h-[250px] border-1 p-5 rounded-md shadow-indigo-400 shadow-md space-y-1 ${
        visited && "bg-amber-950 text-white"
      }`}
    >
      <img
        className="w-[200px] h-[100px] mx-auto"
        src={flags.flags.png}
        alt={flags.flags.alt}
      />
      <h3>Country: {name.common}</h3>
      <span className="block">Population: {population.population}</span>
      <button
        className="cursor-pointer p-2 bg-green-600 border-1 border-amber-400 rounded-md text-gray-50 hover:bg-black duration-200"
        onClick={() => {
          visiteHandler();
        }}
      >
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
}
