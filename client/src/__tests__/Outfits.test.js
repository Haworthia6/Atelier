import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
const expect = chai.expect;
chai.use(chaiEnzyme());
import React from 'react';
import { act } from 'react-dom/test-utils';
import exampleStore from '../../../exampleData/exampleStore';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import Outfits from '../components/relatedItems/Outfits';
const mockStore = configureMockStore([thunk]);
import AddOutfit from '../components/relatedItems/AddOutfit';
import sinon from 'sinon';

describe('Outfits', () => {
  let wrapper, store;
  beforeEach(() => {
    store = mockStore(exampleStore);
    wrapper = mount(
      <Provider store={store}>
        <Outfits
          currentProdId={store.getState().currentProductId}
          products={store.getState().products}
        />
      </Provider>
    );
  });

  it('should render a div container' , () => {
    expect(wrapper.find('.horizontal-container')).to.have.lengthOf(1);
    expect(wrapper.find('.horizontal-container').type()).to.equal('div');
  });

  it('should render AddOutfit component', () => {
    expect(wrapper.find(AddOutfit)).to.have.lengthOf(1);
  });

  it('should pass props to AddOutfit', () => {
    expect(wrapper.find(AddOutfit)).to.have.prop('handleOutfitAdd');
  });

  it('should be a handleOutfitAdd function', () => {
    const spy = sinon.spy(wrapper.find(AddOutfit).prop('handleOutfitAdd'));
    act(() => {
      spy();
    });
    sinon.assert.called(spy);
  });
});
