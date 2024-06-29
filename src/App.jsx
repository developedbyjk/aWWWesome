import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';

import Websites from './Websites';

function App() {
  const [count, setCount] = useState(0)

  const delay = 5000; // 5 seconds

  // Get the video element
  const video = document.getElementById('myVideo');

  // Set a timeout to start the video after the delay
  setTimeout(() => {
      video.play();
  }, delay);


  return (
    <>
     <div className="container">
      {/* <h1>A<span>WWW</span>esome</h1> */}
      <dir><h1>A</h1></dir>
      <div>
        <video id="myVideo" autoPlay muted>
          <source src="www.mp4" type="video/mp4" />
        </video>
      </div>
      <div><h1>esome</h1></div>
     </div>
     <Websites/>
        
    </>
  )
}

export default App
