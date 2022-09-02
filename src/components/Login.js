import React, { useState, useEffect, useRef } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'

const Login = (props) => {
  const {
    workers,
    //   handleLogin,
    //  handleUserChange,
    //   user,
    password,
    setPassword,
  } = props
  const [user, setUser] = useState(null)

  const passPart1 = useRef(null)
  const passPart2 = useRef(null)
  const passPart3 = useRef(null)
  const passPart4 = useRef(null)

  const handleUserChange = (event, value) => {
    console.log('value', value)
    setUser(value)
  }
  const handleLogin = async (event) => {
    event.preventDefault()

    console.log('logging in with', user, password)
  }
  //   useEffect(() => {
  //     if (user.length > 2) {
  //       passPart1.current.focus()
  //     }
  //   }, [user])
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
          value={user}
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
