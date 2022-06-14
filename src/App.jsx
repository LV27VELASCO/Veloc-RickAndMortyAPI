import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
import useLocation from './Hooks/useLocation'
import Loading from './Components/Loading'
import RickAndMorty from './Components/RickAndMorty'
import CardCharacter from './Components/CardCharacter'
import useResident from './Hooks/useResident'
import ImgPortada from './Components/ImgPortada'
import InputControled from './Components/InputControled'
import Footer from './Components/Footer'

function App() {

  const [inputt, setInputt] = useState()

 


  const { locations,setLocations, load } = useLocation()

  console.log('heyy',locations)
  return (
    <div className="App">
      {load
        ?
        <Loading />
        :
        <div className='ImgAndRick'>
          <ImgPortada/>
          <div className='contain-title'>
          <h1 className='text'>Rick and Morty Wiky </h1>
          <InputControled inputt={inputt} setInputt={setInputt} setLocations={setLocations}/>
          </div>
          <div className='RickandCard'>
            <RickAndMorty locations={locations} />
            <div className='ContainCard'>
              {
                locations?.residents.map(resident => (
                  <CardCharacter resident={resident} key={resident} />
                ))
              }
            </div>
          </div>
          <Footer/>
        </div>


      }
    </div>
  )
}

export default App
