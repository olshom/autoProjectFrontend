import React, { useState, useEffect, useRef } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import loginService from '../services/login'

const Login = (props) => {
  const {
    workers
  } = props
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  const passPart1 = useRef(null)
  const passPart2 = useRef(null)
  const passPart3 = useRef(null)
  const passPart4 = useRef(null)

  const handleUserChange = (event, value) => {
    console.log('value', value)
    setUsername(value)
  }
  const handleLogin = async (event) => {
    event.preventDefault()

    console.log('logging in with', username, password)

    try {
      const user = await loginService.login({
        username, password,
      })
      setUser(user)
      setUsername('')
      setPassword('')
    } catch(exception) {
      console.log('wrong credentials')
    }

  }

  return (
    <form onSubmit={handleLogin}>
      <p>Log in</p>
      <div>
        <Autocomplete
          disablePortal
          id="Username"
          options={workers}
          getOptionLabel={(option) => option.name}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          sx={{ width: 300 }}
          renderInput={(params) => (
            <TextField autoFocus {...params} label="Username" />
          )}
          size="small"
          onChange={handleUserChange}
          value={username}
        />
      </div>
      <p>pin</p>
      <div>
        <TextField
          size="small"
          required
          sx={{ width: '38px' }}
          inputProps={{ maxLength: 1 }}
          onChange={({ target }) => setPassword(target.value)}
          ref={passPart1}
        />{' '}
        <TextField
          size="small"
          required
          sx={{ width: '38px' }}
          inputProps={{ maxLength: 1 }}
          onChange={({ target }) => setPassword(password.concat(target.value))}
          ref={passPart2}
        />{' '}
        <TextField
          size="small"
          required
          sx={{ width: '38px' }}
          inputProps={{ maxLength: 1 }}
          onChange={({ target }) => setPassword(password.concat(target.value))}
          ref={passPart3}
        />{' '}
        <TextField
          size="small"
          required
          sx={{ width: '38px' }}
          inputProps={{ maxLength: 1 }}
          onChange={({ target }) => setPassword(password.concat(target.value))}
          ref={passPart4}
        />
      </div>
      <div>
        <Button type="submit" variant="contained" size="medium">
          Log in
        </Button>
      </div>
    </form>
  )
}

export default Login
