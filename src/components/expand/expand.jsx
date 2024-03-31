import { useEffect, useState } from 'react'
import './expand.css'

export const Expand = () => {

    const [ expands , setExpands ] = useState([]);
    const { VITE_API } = import.meta.env
    const baseUrl = VITE_API
    const endpoint = 'datosweb/id/4'

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
        .then( data => setExpands(data))
        .catch( err => console.log(err))
        .finally( () => controller.abort())
    } , [] )

    return(
        <>
            { expands.map( each => (
                <div className='Expand-bg'>
                    <div className='Expand-divImg'>
                        <img className='Expand-mobile' src={each.imagen} alt={each.alt2} />
                    </div>
                    <div className='Expand-info'>
                        <img className='Expand-icon' src={each.icono} alt={each.alt1} />
                        <h2 className='Expand-h2'>{each.titulo}</h2>
                        <p className='Expand-p'>{each.parrafo}</p>
                    </div>
                </div>
            ))}       
        </>
    )
}