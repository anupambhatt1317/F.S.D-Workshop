import React from 'react'
import car from "../assets/car.png";

const Home = () => {
  return (
    <div>
      <h2 style={{ color: 'blue', fontSize: '100px', textAlign: 'center' }}>
        Welcome to My New Car
      </h2>
      <img src={car}></img>
      <p>This is the home page content.</p>
    </div>
  )
}

export default Home


