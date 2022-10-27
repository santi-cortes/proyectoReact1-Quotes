import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import quotes from './json/quotes.json'
import QuoteBox from './components/QuoteBox'


function App() {

  // Esta funcion calcula un  nummero random
  const random = arr => Math.floor(Math.random() * arr.length)
  const randomCol = () => Math.floor(Math.random()*16777215).toString(16)

  // Estas funciones extraen el indice de los arreglos con las citas y colores
  const firstElement = quotes[random(quotes)]
  const [randomQuote, setRandomQuote] = useState(firstElement)

  const firstColor = "#" + randomCol()
  const [randomColor, setRandomColor] = useState(firstColor)
  
  const backgroundObject = {
    backgroundColor: randomColor
  }

  
  // Esta funcion vuelve a hacer los calculas para encontrar los indices
  const getRandom = () => {
    setRandomColor("#" + randomCol())
    setRandomQuote(quotes[random(quotes)])
  }



  return (
    <div style={backgroundObject} className="App">
      <QuoteBox 
      randomQuote={randomQuote}
      randomColor={randomColor}
      getRandom={getRandom}
      />
    </div>
  )
}

export default App
