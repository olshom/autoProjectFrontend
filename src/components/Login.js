import * as React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'

const Login = ({
  workers,
  handleLogin,
  handleUserChange,
  user,
  password,
  setPassword,
}) => {
  console.log('I want to see my pass', password)
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
          renderInput={(params) => <TextField {...params} label="Username" />}
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
        />{' '}
        <TextField
          size="small"
          required
          sx={{ width: '38px' }}
          inputProps={{ maxLength: 1 }}
          onChange={({ target }) => setPassword(password.concat(target.value))}
        />{' '}
        <TextField
          size="small"
          required
          sx={{ width: '38px' }}
          inputProps={{ maxLength: 1 }}
          onChange={({ target }) => setPassword(password.concat(target.value))}
        />{' '}
        <TextField
          size="small"
          required
          sx={{ width: '38px' }}
          inputProps={{ maxLength: 1 }}
          onChange={({ target }) => setPassword(password.concat(target.value))}
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
