import React from 'react'
import percipitationIcon from '../assets/PrecipitationIcon.png'

function PrecipitationCard({ precipitation }) {
  return (
    <div className='card-container'>
      <div className='mb-8 flex flex-col justify-between'>
        <div className='card-header'>
          <div className='card-title'>Precipitació</div>
          <img src={percipitationIcon} alt="Precipitation Icon" className="w-16" />
        </div>
        <p className='card-value'>{precipitation}mm</p>
      </div>        
    </div>
  )
}

export default PrecipitationCard