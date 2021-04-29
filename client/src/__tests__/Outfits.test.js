import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
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
import toJSON from 'enzyme-to-json';

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

  it('should match its snapshot', () => {
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('should render a div container' , () => {
    chai.expect(wrapper.find('.horizontal-container')).to.have.lengthOf(1);
    chai.expect(wrapper.find('.horizontal-container').type()).to.equal('div');
  });

  it('should render AddOutfit component', () => {
    chai.expect(wrapper.find(AddOutfit)).to.have.lengthOf(1);
  });

  it('should pass props to AddOutfit', () => {
    chai.expect(wrapper.find(AddOutfit)).to.have.prop('handleOutfitAdd');
  });

  it('should be a handleOutfitAdd function', () => {
    const spy = sinon.spy(wrapper.find(AddOutfit).prop('handleOutfitAdd'));
    act(() => {
      spy();
    });
    sinon.assert.called(spy);
  });
});
