import React, { useEffect, useState } from 'react';
import './hero.css';

export const Hero = () => {
  const [heros, setHeros] = useState([]);
  const { VITE_API } = import.meta.env
  const baseUrl = VITE_API
  const endpoint = 'datosweb/id/1'

  useEffect(() => {

      let controller = new AbortController()
      let options = {
          method : 'GET',
          headers : {
              'Content-type' : 'application/json'
          },
          signal : controller.signal
      }
      fetch( baseUrl + endpoint , options )
        .then(res => res.json())
        .then(data => setHeros(data))
        .catch(err => console.error(err))
        .finally(() => controller.abort())
    }, []);

  return (
    <>
      { heros.map( each => (
          <div className='Hero-div' key={each.id}>
            <div className='Hero-info'>
              <img className='Hero-icon' src={each.icono_apple } alt={each.alt1} />
              <h2 className='Hero-h2'>{each.titulo}</h2>
              <p className='Hero-p'>{each.parrafo}</p>
              <img className='Hero-apple' src={each.download_apple} alt={each.alt2} />
            </div>
            <div className='Hero-divmobile'>
              <img className='Hero-mobile' src={each.imagen} alt={each.alt3} />
            </div>
          </div>
        ))}
    </>
  );
};
