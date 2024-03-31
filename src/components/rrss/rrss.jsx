import { useEffect, useState } from 'react'
import './rrss.css'

export const Rrss = () => {

    const [ rrss , setRrss ] = useState([])
    const { VITE_API } = import.meta.env
    const baseUrl = VITE_API
    const endpoint = 'datosweb/id/9'

    useEffect( () => {
        
        let controller = new AbortController()
        let options = {
            method : 'GET',
            headers : {
                'content-type' : 'application/json'
            },
            signal : controller.signal
        }
        fetch( baseUrl + endpoint , options )
            .then( res => res.json())
            .then( data => setRrss(data[0].rrss))
            .catch( err => console.log(err))
            .finally( () => controller.abort())
    })

    return(
        <>
                 <div className='Rrss-container'>
                    { rrss.map( each =>
                        <Iconos
                            key={ each.id } { ...each }
                        />    
                    )}
                </div>
        </>
    )
}

const Iconos = ( props ) => {
    const { icon , alt } = props
    return(
        <>
            <a href="#">
                <img src={icon} alt={alt} />
            </a>
        </>
    )
}