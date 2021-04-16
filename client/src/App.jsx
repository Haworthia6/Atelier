import React, { useState } from "react"
import Counter from './components/Counter'

function App() {
  const [testState, setTestState] = useState("React")

  return (
    <div>
      {testState} rendering correctly!
      <Counter />
    </div>
  )
}

export default App
