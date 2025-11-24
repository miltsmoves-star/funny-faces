import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  // Example of accessing the API_KEY from environment
  const apiKey = import.meta.env.VITE_API_KEY

  return (
    <>
      <div>
        <h1>Funny Faces</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {apiKey && (
        <p className="read-the-docs">
          API Key configured: {apiKey.substring(0, 10)}...
        </p>
      )}
    </>
  )
}

export default App
