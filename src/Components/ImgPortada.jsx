import React, { useEffect, useState } from 'react'

const ImgPortada = () => {

  const [imagenn, setimagenn] = useState()

  const fondos = [
    'https://www.xtrafondos.com/wallpapers/rick-y-morty-fanart-2020-6344.jpg',
    'https://www.xtrafondos.com/wallpapers/morty-siendo-atacado-4727.jpg',
    'https://www.xtrafondos.com/wallpapers/rick-y-morty-en-universo-de-dragon-ball-6401.jpg',
    'https://www.xtrafondos.com/wallpapers/rick-y-morty-en-el-espacio-9232.jpg',
    'https://p4.wallpaperbetter.com/wallpaper/200/433/178/rick-and-morty-cartoons-tv-shows-hd-wallpaper-preview.jpg',
    'https://fondosmil.com/fondo/27334.jpg',
    'https://i.pinimg.com/originals/13/ab/06/13ab066be2effdaddea5538a16e5b9b1.png',
    'https://images8.alphacoders.com/114/1148255.jpg',
  ]

  useEffect(() => {



    const createRandom = array => {
      return Math.floor(Math.random() * array.length)
    }

    const getElementRandom = array => {
      const i = createRandom(fondos)
      return array[i]
    }

    return (setimagenn(getElementRandom(fondos)))


    
   
  }, [])
  
  
    
     
    
  return (
    <header className='imgPortada'>
        <img src={imagenn} alt="" />
        
    </header>
  )
}

export default ImgPortada