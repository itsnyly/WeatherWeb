import React from 'react'
import windIcon from '../assets/WindIcon.png';

function WindCard({ wind }) {
  return (
        <div className='card-container'>
              <div className='mb-8'>
                <div className='card-header'>
                  <div className='card-title'>Wind</div>
                  <img src={windIcon} alt="wind icon" class="w-16" />
                </div>
                <p className='card-value'>{wind}</p>
              </div>
        </div>
  )
}

export default WindCard