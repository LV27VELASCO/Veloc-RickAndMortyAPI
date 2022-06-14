import axios from 'axios'
import React, { useState } from 'react'

const InputControled = ({ inputt, setInputt, setLocations }) => {

  const Buscar = e => { 
    if(e.target.value==''){
      return setInputt()
    }
    else{return setInputt(e.target.value)}
  }

 

  const reload = (e) => {
    e.preventDefault()
    const URL = `https://rickandmortyapi.com/api/location/${inputt}`
    axios.get(URL)
      .then(res => setLocations(res.data))
      .catch(err => console.log(err))
  }

  return (
    <div className='contain-input'>
      <form action="" onSubmit={reload}>
        <input
          type="number"
          value={inputt}
          onChange={Buscar}
          autoComplete='off'
          placeholder='Buscar dimension 1 : 126'
        />
        <button type='submit'><div><i className='bx bx-search'></i></div></button>
      </form>
    </div>
  )
}

export default InputControled