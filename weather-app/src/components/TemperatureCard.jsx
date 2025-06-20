import React from 'react'
import { useTemperatureUnit } from '../context/TemperatureUnitContext';

function TemperatureCard({ temperature_c, temperature_f, max_temp_c, max_temp_f, min_temp_c, min_temp_f }) {
  const { unit } = useTemperatureUnit();  
  return (
    <div className='text-center'>
      <h3 className='text-xl font-semibold mb-2'>
        Temperature: {unit === 'C' ? temperature_c : temperature_f}º{unit}
      </h3>
      <p className='text-md'>
        Max: {unit === 'C' ? max_temp_c : max_temp_f}º{unit} / 
        Min: {unit === 'C' ? min_temp_c : min_temp_f}º{unit}
      </p>
    </div>
  );
}

export default TemperatureCard

