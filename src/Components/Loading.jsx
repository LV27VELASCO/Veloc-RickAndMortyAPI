import React from 'react'
import LoadRick from '../assets/img/rick.gif'


const Loading = () => {

  return (
    <div className='Load'>
        <img className='gif' src={LoadRick} alt="cargando" />
        <h2>Cargando...</h2>
        </div>
  )
}

export default Loading