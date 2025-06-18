import React from 'react'
import uvIcon from '../assets/UVIcon.png'
import uvIndex from '../assets/UVIndex.png'

function UVIndexCard({ uv_index }) {
  const getUVColor = (uv) => {
    if (uv <= 2) return 'green';          
    if (uv <= 5) return 'yellow'; 
    if (uv <= 7) return 'orange';
    if (uv <= 10) return 'red'; 
    return 'purple'; 
  };

  const uvColor = getUVColor(uv_index);

  return (
    <div className='card-container'>
        <div className='mb-8 flex flex-col justify-between'>
            <div className='card-header'>
              <div className='card-title'>UV Index</div>
              <img src={uvIcon} alt="uv icon" class="w-16" />
            </div>
            <p className='card-value' style={{ color: uvColor }}>{uv_index}</p>
            <img src={uvIndex} alt="uv index" class="scale-90 translate-y-3"/>
        </div>        
    </div>
  )
}

export default UVIndexCard