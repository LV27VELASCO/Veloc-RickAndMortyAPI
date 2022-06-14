import React from 'react'

const RickAndMorty = ({locations}) => {
  return (
    <article className='Planet'>
        <div className='namePlanet'><h2>{locations.name}</h2></div>
        <div className='PlanetDescription'>
        <ul className='listdate'>
            <li><span>Tipo:</span> <p>{locations.type}</p></li>
            <li><span>Dimension:</span><p>{locations.dimension}</p></li>
            <li><span>Poblacion:</span><p> {locations.residents.length}</p></li>
        </ul>
        </div>
    </article>
  )
}

export default RickAndMorty