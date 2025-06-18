import React, {useState} from 'react'

function TemperatureCard({ temperature_c, temperature_f, sensation_c, sensation_f }) {
    const [unit, setUnit] = useState('C');

    const toggleUnit = () => {
    setUnit(unit === 'C' ? 'F' : 'C');
    };

    return (
    <div>
        <h2>La temperatura és de {unit === 'C' ? temperature_c : temperature_f}º{unit}</h2>
        <h3>La sensació tèrmica és de {unit === 'C' ? sensation_c : sensation_f}º{unit}</h3>
        <button onClick={toggleUnit}>Canviar a º{unit === 'C' ? 'F' : 'C'}</button>
    </div>
  )
}

export default TemperatureCard