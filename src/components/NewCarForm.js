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
          <input value={carNumber} required onChange={handleCarNumber} />
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
          <button type="submit">add a car</button>
        </div>
      </form>
    </div>
  )
}

export default NewCarForm
