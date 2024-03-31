import { useEffect, useState } from 'react'
import './archive.css'

export const Archive = () => {

    const [ archives , setArchive ] = useState([])
    const { VITE_API } = import.meta.env
    const baseUrl = VITE_API
    const endpoint = 'datosweb/id/2'

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
        .then( data => setArchive(data))
        .catch( err => console.log(err))
        .finally(() => controller.abort())
    } , [] )

    return(
        <>
            { archives.map( each => (
                <div className='Archive-bg'>
                    <div className='Archive-divImg'>
                        <img className='Archive-mobile' src={each.imagen} alt={each.alt2} />
                    </div>
                    <div className='Archive-info'>
                        <img className='Archive-icon' src={each.icono} alt={each.alt1} />
                        <h2 className='Archive-h2'>{each.titulo}</h2>
                        <p className='Archive-p'>{each.parrafo}</p>
                    </div>
                </div>
            ))}
        </>
    )
}