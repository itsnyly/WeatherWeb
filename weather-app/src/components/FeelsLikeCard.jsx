import React from 'react'
import cloudyDay from '../assets/cloudy_day.png';
import { useTemperatureUnit } from '../context/TemperatureUnitContext';

function FeelsLikeCard({ sensation_c, sensation_f }) {
    const { unit } = useTemperatureUnit();
  
    return (
      <div className='card-container'>
        <div className='mb-8'>
          <div className='card-header'>
            <div className='card-title'>Thermal sensation</div>
            <img src={cloudyDay} alt="cloudy day" className="w-16" />
          </div>
          <p className='card-value'>{unit === 'C' ? sensation_c : sensation_f}º{unit}</p>
        </div>
      </div>
    );
}

export default FeelsLikeCard