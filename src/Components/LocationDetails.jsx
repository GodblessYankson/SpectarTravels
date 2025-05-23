import React from 'react'
import { useParams } from 'react-router-dom'
import { tour } from '../constant';

const LocationDetails = () => {
  
  const { id } = useParams()
  const tourId = parseInt(id, 10)
  const selectedTour = tour.find(item => item.id === tourId)

  return (
    <div>
      <p>Tour details - {id}</p>
      { selectedTour ? (<div>
          <p>{selectedTour.name}</p>
          <p>{selectedTour.src}</p>
      </div>): (<div>
        <p>Cannot reach this page</p>
      </div>)}
     </div>
  )
}

export default LocationDetails