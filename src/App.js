import React, { useState, useEffect } from 'react'

import Cars from './components/Cars'
import NewCarForm from './components/NewCarForm'
import carsService from './services/cars'
import workersService from './services/workers'

const App = () => {
  const [carNumber, setCarNumber] = useState('')
  const [newCar, setNewCar] = useState('')
  const [cars, setCars] = useState([])
  const [worker, setWorker] = useState('')
  const [workers, setWorkers] = useState([])

  useEffect(() => {
    carsService.getAll().then((response) => {
      setCars(response.data)
    })
  }, [])

  useEffect(() => {
    workersService.getAll().then((response) => {
      console.log(response.data)
      setWorkers(response.data)
    })
  }, [])

  const handleCarNumber = (event) => {
    setCarNumber(event.target.value)
  }

  const handleWorker = (event) => {
    setWorker(event.target.value)
  }

  const addNewCar = (event) => {
    event.preventDefault()

    const carObject = {
      number: carNumber,
      date: new Date().toISOString(),
      work: 'accepted',
      worker: worker,
    }
    carsService.create(carObject).then((response) => {
      console.log(response)
      setCars(cars.concat(response.data))
      setCarNumber('')
      setWorker('defaultValue')
    })
  }
  return (
    <div>
      <NewCarForm
        addNewCar={addNewCar}
        carNumber={carNumber}
        handleCarNumber={handleCarNumber}
        handleWorker={handleWorker}
        workers={workers}
        worker={worker}
      />
      <Cars cars={cars} />
    </div>
  )
}

export default App
