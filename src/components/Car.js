import React, { useState, useEffect } from 'react'

import Select from '@mui/material/Select'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
//import carsServices from '../services/cars'

const Car = ({ car, states, updateStateCar }) => {
  const [state, setState] = useState('')

  return (
    <>
      <div>{car.number}</div>
      {car.stateID}
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Change state"
          value={state}
          onChange={(event) => {
            console.log(event.target.value)
            setState(event.target.value)
            updateStateCar(car.id, event.target.value)
          }}
        >
          {states.map((s) => (
            <MenuItem key={s.id} value={s.id}>
              {s.state}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  )
}

export default Car
