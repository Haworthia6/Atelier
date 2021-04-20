import React from 'react';
import { shallow, mount } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import RelatedAndOutfits from '../components/relatedItems/RelatedAndOutfits';
import RelatedItems from '../components/relatedItems/RelatedItems';
import Outfits from '../components/relatedItems/Outfits';

const mockStore = configureMockStore([thunk]);

describe('Related Items and Outfits container', () => {
  it('should exist', () => {
    const store = mockStore({
      currentProductId: null,
      products: {}
    })

    const wrap = mount(
      <Provider store={store}>
        <RelatedAndOutfits />
      </Provider>
    )
    expect(wrap.exists()).to.be.true;
  });

  it('should contain a div wrapper', () => {
    const store = mockStore({
      currentProductId: null,
      products: {}
    })

    const wrap = mount(
      <Provider store={store}>
        <RelatedAndOutfits />
      </Provider>
    )
    expect(wrap.find(RelatedItems).exists()).to.be.true;
  });

  xit('should contain two carousels', () => {
    const fullMount = mount(<RelatedAndOutfits />);
    expect(fullMount).to.contain(<RelatedItems />, <Outfits />);
  });

});
