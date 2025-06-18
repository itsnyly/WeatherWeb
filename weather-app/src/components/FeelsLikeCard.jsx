import React, {useState} from 'react'
import cloudyDay from '../assets/cloudy_day.png';

function FeelsLikeCard({ sensation_c, sensation_f }) {
    const [unit, setUnit] = useState('C');
  
    const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
    };
  
    return (
    <div className='card-container'>
        <div className='mb-8'>
            <div className='card-header'>
                <div className='card-title'>Sensació Tèrmica</div>
                <img src={cloudyDay} alt="cloudy day" class="w-16" />
            </div>
            <p className='card-value'>{unit === 'C' ? sensation_c : sensation_f}º{unit}</p>
        </div>
        <button onClick={toggleUnit}>Canviar a º{unit === 'C' ? 'F' : 'C'}</button>
    </div>
  )
}

export default FeelsLikeCard