import React from 'react';
import humidityIcon from '../assets/HumidityIcon.png';

function HumidityCard({ humidity }) {
  return (
    <div className='card-container'>
     <div className='mb-8'>
       <div className='card-header'>
         <div className='card-title'>Humidity</div>
         <img src={humidityIcon} alt="humidity Icon" class="w-16" />
       </div>
       <p className='card-value'>{humidity}</p>
     </div>
    </div>
  )
}

export default HumidityCard