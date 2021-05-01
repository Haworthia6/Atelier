import React from 'react';
import ReactDOM from 'react-dom';
// CSS
import '../../public/styles.scss';
// Store
import store from '../store/store';
import { Provider } from 'react-redux';
// Components
import { BrowserRouter} from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
