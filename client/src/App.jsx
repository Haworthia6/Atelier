import React from 'react';
import Overview from './components/overview/Overview';
import RelatedAndOutfits from './components/relatedItems/RelatedAndOutfits';

function App() {

  return (
    <>
      <Overview />
      <section className="col-center">
        <RelatedAndOutfits />
      </section>
    </>
  );
}

export default App;
