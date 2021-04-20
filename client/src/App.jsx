import React, { useState } from "react"
import Counter from './components/Counter'
import Overview from './components/Overview'

function App() {
  const [testState, setTestState] = useState("React")

  return (
    <div>
      {testState} rendering correctly!
      <Counter />
      <Overview />
    </div>
  )
}

export default App
