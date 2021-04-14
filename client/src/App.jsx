import React, { useState } from 'react'

function App () {

  const [testState, setTestState] = useState('React')

  return (
    <div>{testState} rendering correctly!</div>
  )
}

export default App
