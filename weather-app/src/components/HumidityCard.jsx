import React from 'react';

function HumidityCard({ humidity }) {
  return (
    <div>
      <h2 className='font-bold'>Humidity from today : {humidity}% </h2>
    </div>
  )
}

export default HumidityCard