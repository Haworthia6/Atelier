import Overview from './components/overview/Overview';
import React, { useState } from 'react';
import RelatedAndOutfits from './components/relatedItems/RelatedAndOutfits';

function App() {
  const [testState] = useState('React');

  return (
    <>
      {testState} rendering correctly!
      <Overview />
      <section className="col-center">
        <RelatedAndOutfits />
      </section>
    </>
  );
}

export default App;
