import React from 'react'

function WeatherDescriptionCard({ condition, condition_icon }) {
  return (
    <div className='text-center p-4'>
      <h4 className='text-xl font-semibold mb-2'>Weather Condition</h4>
      <img src={condition_icon} alt={condition} className="w-12 h-12 mb-2" />
      <p className='text-lg'>{condition}</p>
    </div>
  )
}

export default WeatherDescriptionCard