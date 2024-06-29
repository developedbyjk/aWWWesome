import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import Websites from './Websites';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container">
      <h1>A<span>WWW</span>esome</h1>
     </div>
     <Websites/>
        
    </>
  )
}

export default App
