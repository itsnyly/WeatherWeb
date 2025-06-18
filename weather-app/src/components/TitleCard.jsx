import React from 'react'

function TitleCard({ city, last_update }) {
  return (
    <div>
        <h1>Situació meteorològica de {city}</h1>
        <h3>Última actialització de les dades: {last_update}</h3>
    </div>
  )
}

export default TitleCard