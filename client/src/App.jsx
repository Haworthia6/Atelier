import React, { useState } from "react"
import ImageGalleryContainer from '../store/containers/imageGalleryContainer'

function App() {
  const [testState, setTestState] = useState("React")

  return (
    <div>
      {testState} rendering correctly!
      <ImageGalleryContainer />
    </div>
  )
}

export default App
