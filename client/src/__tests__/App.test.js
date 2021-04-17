import React from 'react'
import { shallow } from 'enzyme'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
const expect = chai.expect
chai.use(chaiEnzyme())

import App from '../App'

describe('App', () => {
  test('should render', () => {
    const wrapper = shallow(
      <App />
    )

    expect(wrapper.exists()).to.be.true
  })
})
