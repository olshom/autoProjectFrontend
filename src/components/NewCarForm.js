import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


const NewCarForm = ({
  addNewCar,
  carNumber,
  handleCarNumber,
  handleWorker,
  workers,
  worker,
}) => {
  return (
    <div>
      <form onSubmit={addNewCar}>
        <div>
          number:{' '}
          <TextField size="small" sx={{ width: 300 }} required value={carNumber} onChange={handleCarNumber} />
        </div>
        <div>
          worker:{' '}
          <select id="workers" value={worker} onChange={handleWorker}>
            <option value="defaultValue"> ---Choose worker--- </option>
            {workers.map((w) => (
              <option key={w.id} value={w.id}>
                {w.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          
          <Button type="submit" variant="contained" size="medium">add a car</Button>
        </div>
      </form>
    </div>
  )
}

export default NewCarForm
