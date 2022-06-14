import axios from "axios"
import React, { useEffect, useState } from 'react'

const CardCharacter = ({ resident }) => {

    const [people, setPeople] = useState()

    const nombre = people?.status;

    let estado = () => {
        if (nombre == 'Alive') {
            return ('Alive')
        }
        else if (nombre == 'Dead') {
            return ('Dead')
        }
        else { return ('Sin información') }
    }

    const check = () => {
        if (nombre == 'Alive') {
            return ({
                backgroundColor: '#008000'
            })
        }
        else if (nombre == 'Dead') {
            return ({
                backgroundColor: '#ff0000'
            })
        }
        else {
            return ({
                backgroundColor: '#808080'
            })
        }
    }

    useEffect(() => {

        axios.get(resident)
            .then(res => {
                setPeople(res.data)
            })
            .catch(err => console.log(err.data))
    }, [])

    console.log(people)

    return (
        <article className='Card'>
            <div className="container-image">
                <img src={people?.image} />
            </div>
            <div className="Datos">
                <div className="name">
                    <h2>{people?.name}</h2>
                </div>
                <div className="descripcion">
                    <ul className="descripcionlist">
                        <li><span>RAZA</span> <p>{people?.species}</p></li>
                        <li><span>ORIGEN</span><p>{people?.origin.name}</p></li>
                        <li><span>APARICION EN EPISODIOS</span> <p>{people?.episode.length}</p></li>
                    </ul>
                </div>
            </div>
            <div className="estado">
                <div className="check" style={check(nombre)}></div>
                <div className="parrafo"><p>{estado(nombre)}</p></div>
            </div>
        </article>
    )
}

export default CardCharacter