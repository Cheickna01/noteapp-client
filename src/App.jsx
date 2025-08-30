import { useState } from 'react'
import './App.css'
import Main from './Pages/Main/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Main/>
    </>
  )
}

export default App
