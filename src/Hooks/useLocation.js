import axios from "axios"
import { useEffect, useState } from "react"


const useLocation = () => {

    const [locations, setLocations] = useState()
    const [load, setLoad] = useState(true)

    useEffect(() => {
        const randomNumber = Math.ceil(Math.random() * 126)
        const URL = `https://rickandmortyapi.com/api/location/${randomNumber}`

        axios.get(URL)
        .then(res =>{
            setLocations(res.data)
            setLoad(false)})
        .catch( err => console.log(err.data))
    }, [])

    console.log(locations)
    return {locations,setLocations,load}

}

export default useLocation