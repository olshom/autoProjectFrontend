import React, { useState, useEffect } from 'react'
import carsService from '../services/cars'
import stateService from '../services/states'

import Car from './Car'

import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

const Cars = ({ cars, setCars }) => {
  const [states, setStates] = useState([])

  useEffect(() => {
    stateService.getAll().then((response) => {
      setStates(response.data)
    })
  }, [])
  const updateStateCar = (carID, newStateID) => {
    const car = cars.find((car) => car.id === carID)
    const changedCar = { ...car, stateID: newStateID }

    console.log(changedCar)

    carsService
      .update(carID, changedCar)
      .then((returnedCar) => {
        setCars(cars.map((car) => (car.id !== carID ? car : returnedCar)))
      })
      .catch()
  }

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

  const BasicGrid = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          {states.map((s) => (
            <Grid key={s.id} item xs={2}>
              <Item>{s.state}</Item>

              {cars
                .filter((car) => car.stateID === s.id)
                .map((car) => (
                  <Grid key={car.id} item xs={12}>
                    <Item>
                      <Car
                        key={car.id}
                        car={car}
                        states={states}
                        updateStateCar={updateStateCar}
                      />
                    </Item>
                  </Grid>
                ))}
            </Grid>
          ))}
        </Grid>
      </Box>
    )
  }
  return (
    <>
      <BasicGrid></BasicGrid>
      <ul>
        {cars.map((car) => (
          <Car
            key={car.id}
            car={car}
            states={states}
            updateStateCar={updateStateCar}
          />
        ))}
      </ul>
    </>
  )
}
export default Cars
