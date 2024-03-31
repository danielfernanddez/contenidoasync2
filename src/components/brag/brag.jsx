import { useEffect, useState } from 'react'
import './brag.css'

export const Brag = () => {

    const [ cajas , setCajas ] = useState([])
    const { VITE_API } = import.meta.env
    const baseUrl = VITE_API
    const endpoint = 'datosweb/id/7'

    useEffect( () => {
        
        let controller = new AbortController()
        let options = {
            method : 'GET',
            headers : {
                'Content-type' : 'application/json'
            },
            signal : controller.signal
        };
        fetch( baseUrl + endpoint , options )
            .then( res => res.json())
            .then( data => setCajas(data[0].cajas))
            .catch( err => console.log(err))
            .finally( () => controller.abort())
    } , [] )

    return(
        <>
            <div className='Brag-bg'>
                <div className='Brag-container'>
                    <h2 className='Brag-h2'>Praise for Triage 1</h2>
                    <div className='Brag-grid'>
                        { cajas.map( each =>
                            <Box
                                key={ each.id } { ...each }
                            />   
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

const Box = ( props ) => {
    const { imagen , alt1 , titulo } = props
    return(
        <div className='Brag-div'>
            <p className='Brag-p'>{titulo}</p>
            <img className='Brag-icon' src={imagen} alt={alt1} />
        </div>
    )
}