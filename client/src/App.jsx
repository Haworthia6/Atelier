import React, { useState } from 'react';
import Counter from './components/Counter';
import RelatedAndOutfits from './components/relatedItems/RelatedAndOutfits';

function App() {
  const [testState, setTestState] = useState('React');

  return (
    <>
      {testState} rendering correctly!
      <Counter />
      <RelatedAndOutfits />
    </>
  );
}

export default App;
