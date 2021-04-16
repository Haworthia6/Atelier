import { connect } from 'react-redux'
import Counter from '../../src/components/Counter'
import increment from '../actions/addCount'
import decrement from '../actions/subtractCount'

const mapState = (state) => ({
  count: state.count
})

// Under the hood applies bindActionCreators from 'redux'
const mapDispatch = { increment, decrement }

const CounterContainer = connect(mapState, mapDispatch)(Counter)

export default CounterContainer;