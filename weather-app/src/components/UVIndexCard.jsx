import React from 'react'
import cloudyDay from '../assets/cloudy_day.png';

function UVIndexCard({ uv_index }) {
  return (
    <div className='card-container'>
        <div className='mb-8'>
            <div className='card-header'>
            <div className='card-title'>UV Index</div>
            <img src={cloudyDay} alt="cloudy day" class="w-16" />
            </div>
            <p className='card-value'>{uv_index}</p>
        </div>        
    </div>
  )
}

export default UVIndexCard