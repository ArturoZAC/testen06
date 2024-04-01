import axios from "axios"
import { useState } from "react"

const useFecth = () => {
    const [apiData, setApiData] = useState()
    const getApi = (url,key={}) =>{
        axios.get(url,key)
            .then(res => setApiData(res.data))
            .catch(err => console.log(err))
    }
    return [apiData, getApi];
}

export default useFecth