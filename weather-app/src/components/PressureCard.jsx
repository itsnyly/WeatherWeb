import React from 'react';
import pressureIcon from '../assets/PressureIcon.png';

function PressureCard({ pressure }) {
  return (
      <div className='card-container'>
        <div className='mb-8 flex flex-col justify-between'>
          <div className='card-header'>
            <div className='card-title'>Pressió Atmosfèrica</div>
            <img src={pressureIcon} alt="Pressure Icon" className="w-16" />
          </div>
          <p className='card-value'>{pressure}</p>
        </div>        
      </div>
  )
}

export default PressureCard