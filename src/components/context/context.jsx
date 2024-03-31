import { useEffect, useState } from 'react'
import './context.css'

export const Context = () => {

    const [ contexts , setContext ] = useState([])
    const { VITE_API } = import.meta.env
    const baseUrl = VITE_API
    const endpoint = 'datosweb/id/5'

    useEffect( () => {
        
        let controller = new AbortController()
        let options = {
            method : 'GET',
            headers : {'Content-type' : 'application.json'},
            signal : controller.signal
        }
        fetch( baseUrl + endpoint , options )
        .then( res => res.json())
        .then( data => setContext(data))
        .catch( err => console.log(err))
        .finally( () => controller.abort())
    } , [] )
    return(
        <>
            { contexts.map( each => (
                <div className='Context-bg'>
                    <div className='Context-info'>
                            <img className='Context-icon' src={each.icono} alt={each.alt1} />
                            <h2 className='Context-h2'>{each.titulo}</h2>
                            <p className='Context-p'>{each.parrafo}</p>
                    </div>
                    <div className='Context-divImg'>
                        <img className='Context-mobile' src={each.imagen} alt={each.alt2} />
                    </div>
                </div>
            ))}
        </>
    )
}