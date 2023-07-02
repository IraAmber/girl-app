import React, { useState } from 'react'
import './App.css'

function App() {
  const [randomNumber, setRandomNumber] = useState('')

  const generateRandomNumber = () => {
    const min = 200
    const max = 2500
    const number = Math.floor(Math.random() * (max - min + 1) + min)
    const roundedNumber = Math.ceil(number / 10) * 10 // Округлюємо до найближчого більшого кратного 10
    setRandomNumber(roundedNumber)
  }

  return (
    <div className="App">
      <h1>Сьогодні чоловік має дати:</h1>
      <h2>{randomNumber} грн.</h2>
      <button onClick={generateRandomNumber}>клік</button>
    </div>
  )
}

export default App
