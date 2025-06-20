import React from 'react'

function TitleCard({ city, last_update }) {

  return (
    <div className="text-center mb-6">
      <h2 className="text-2xl font-bold">Weather in</h2>
      <p className="text-md mb-2">{city}</p>
      <p className="text-sm text-gray-600">Last update: {last_update}</p>
    </div>
  );
}

export default TitleCard