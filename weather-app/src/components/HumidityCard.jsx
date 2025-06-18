import React from 'react';

function HumidityCard({ humidity }) {
  return (
    <div>
      <h2>Humidity from today : {humidity}% </h2>
    </div>
  )
}

export default HumidityCard