import Overview from './components/overview/Overview'
import React, { useState } from 'react';
import RelatedAndOutfits from './components/relatedItems/RelatedAndOutfits';

function App() {
  const [testState, setTestState] = useState('React');

  return (
    <>
      {testState} rendering correctly!
      <Overview />
      <RelatedAndOutfits />
    </>
  );
}

export default App;
