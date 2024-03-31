import { useEffect, useState } from 'react'
import './keep.css'

export const Keep = () => {

const [ keeps , setKeeps ] = useState([])
const { VITE_API } = import.meta.env
const baseUrl = VITE_API
const endpoint = 'datosweb/id/3'

useEffect( () => {

    let controller = new AbortController()
    let options = {
        method : 'GET',
        headers : {
            'Content-type' : 'application/json'
        },
        signal : controller.signal
    }
    fetch( baseUrl + endpoint , options )
    .then( res => res.json())
    .then( data => setKeeps(data))
    .catch( err => console.log(err))
    .finally(() => controller.abort())
} , [] )

    return(
        <>
            { keeps.map( each => (
                <div className='Keep-bg'>
                    <div className='Keep-info'>
                        <img className='Keep-icon' src={each.icono} alt={each.alt1} />
                        <h2 className='Keep-h2'>{each.titulo}</h2>
                        <p className='Keep-p'>{each.parrafo}</p>
                    </div>
                    <div className='Keep-divImg'>
                        <img className='Keep-mobile' src={each.imagen} alt={each.alt2} />
                    </div>
                </div>
            ))}
        </>
    )
}