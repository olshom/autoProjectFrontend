import React, { useState, useEffect } from 'react'

import Cars from './components/Cars'
import NewCarForm from './components/NewCarForm'
import carsService from './services/cars'
import workersService from './services/workers'
import Login from './components/Login'

const App = () => {
  const [carNumber, setCarNumber] = useState('')
  const [worker, setWorker] = useState('')
  const [workers, setWorkers] = useState([])
  const [cars, setCars] = useState([])

  useEffect(() => {
    carsService.getAll().then((response) => {
      setCars(response.data)
    })
  }, [])
  useEffect(() => {
    workersService.getAll().then((response) => {
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
      stateID: 1,
      worker: worker,
    }
    carsService.create(carObject).then((returnedCar) => {

        setCars(cars.concat(returnedCar))
        setCarNumber('')
        setWorker('defaultValue')
    })
  }

  return (
    <div>
      <Login workers={workers} />
      <NewCarForm
        addNewCar={addNewCar}
        carNumber={carNumber}
        handleCarNumber={handleCarNumber}
        handleWorker={handleWorker}
        workers={workers}
        worker={worker}
      />
      <Cars cars={cars} setCars={setCars} />
    </div>
  )
}

export default App
