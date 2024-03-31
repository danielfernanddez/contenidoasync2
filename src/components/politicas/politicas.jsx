import { useEffect, useState } from 'react'
import './politicas.css'

export const Politicas = () => {

    const [ politic , setPolitic ] = useState([])
    const { VITE_API } = import.meta.env
    const baseUrl = VITE_API
    const endpoint = 'datosweb/id/8'

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
            .then( data => setPolitic(data[0].politic))
            .catch( err => console.log(err))
            .finally( () => controller.abort())
    })

    // const datos = [
    //     { id : 0 , texto : 'FAQ' , icon : '/assets/mail-svg.png' , alt : 'mail-svg' },
    //     { id : 1 , texto : 'Privacy' , icon : '/assets/twitter-svg.png' , alt : 'twitter-svg' },
    //     { id : 2 , texto : 'Terms'  },
    //     { id : 3 , texto : 'Security'  },
    // ]

    return(
        <>
            <div className='Politicas-container'>
                <div className='Politicas-enlaces'>
                { politic.map( each =>
                    <Parrafo
                        key={ each.id } { ...each }
                    />    
                )}
                </div>
                {/* <div className='Rrss-container'>
                    { politic.map( each =>
                        <Iconos
                            key={ each.id } { ...each }
                        />    
                    )}
                </div> */}
            </div>
        </>
    )
}

const Parrafo = ( props ) => {
    const { texto } = props
    return(
        <>
            <a href='#' className='Politicas-a'>{texto}</a>
        </>
    )
}

// const Iconos = ( props ) => {
//     const { icon , alt } = props
//     return(
//         <>
//             <a href="#">
//                 <img src={icon} alt={alt} />
//             </a>
//         </>
//     )
// }