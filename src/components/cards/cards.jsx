import { useEffect, useState } from 'react';
import './cards.css';

export const Cards = () => {
    const [boxes, setBoxes] = useState([]);
    const { VITE_API } = import.meta.env
    const baseUrl = VITE_API
    const endpoint = 'datosweb/id/6'

    useEffect(() => {
        let controller = new AbortController();
        let options = {
            method: 'GET',
            headers: {
                'Content-type': 'application/json'
            },
            signal: controller.signal
        };

        fetch( baseUrl + endpoint , options)
            .then(res => res.json())
            .then(data => setBoxes(data[0].boxes))
            .catch(err => console.log(err))
            .finally(() => controller.abort());
    }, []);

    return (
        <div className='Cards-bg'>
            <div className='Cards-grid'>
                {boxes.map(each => (
                    <Box key={each.id} {...each} />
                ))}
            </div>
        </div>
    );
};

const Box = (props) => {
    const { icono, titulo, alt1 } = props;
    return (
        <div className='Cards-div'>
            <img className='Cards-icon' src={icono} alt={alt1} />
            <p className='Cards-p'>{titulo}</p>
        </div>
    );
};

