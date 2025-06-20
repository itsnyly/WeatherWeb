import React from 'react'
import windIcon from '../assets/WindIcon.png';

function WindCard({ wind, wind_dir, wind_degree }) {

  return (
    <div className='card-container'>
      <div className='mb-8'>
        <div className='card-header'>
          <div className='card-title'>Wind</div>
          <img src={windIcon} alt="wind icon" class="w-16" />
        </div>
        <p className='card-value'>{wind} km/h</p>
        <div className="flex justify-center items-center mt-2">
          <div style={{ transform: `rotate(${wind_degree}deg)` }}
            className="text-3xl transition-transform duration-300">➵
          </div>
          <span className="ml-2 text-sm text-gray-600"><strong>{wind_dir}</strong></span>
        </div>
      </div>
    </div>
  )
};

export default WindCard