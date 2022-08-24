import Car from './Car'

const Cars = ({ cars }) => {
  return (
    <ul>
      {cars.map((car) => (
        <Car key={car.id} car={car} />
      ))}
    </ul>
  )
}

export default Cars
