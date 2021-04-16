import React, { useState } from "react"
import CounterContainer from '../store/containers/CounterContainer'

function App() {
  const [testState, setTestState] = useState("React")

  return (
    <div>
      {testState} rendering correctly!
      <CounterContainer />
    </div>
  )
}

export default App
