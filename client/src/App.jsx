import Overview from './components/overview/Overview'
import React, { useState } from 'react';
import Counter from './components/Counter';
import RelatedAndOutfits from './components/relatedItems/RelatedAndOutfits';

function App() {
  const [testState, setTestState] = useState('React');

  return (
    <>
      {testState} rendering correctly!
      <Counter />
      <Overview />
      <RelatedAndOutfits />
    </>
  );
}

export default App;
