import React from 'react';
import cloudyDay from '../assets/cloudy_day.png';


function HumidityCard({ humidity }) {
  return (
    <div className='card-container'>
     <div className='mb-8'>
       <div className='card-header'>
         <div className='card-title'>Humidity</div>
         <img src={cloudyDay} alt="cloudy day" class="w-16" />
       </div>
       <p className='card-value'>{humidity}</p>
     </div>
    </div>
  )
}

export default HumidityCard