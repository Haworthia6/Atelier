import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
// Store
import { useSelector, useDispatch} from 'react-redux';
import changeProduct from '../store/actions/changeProduct';
// Components
import Overview from './components/overview/Overview';
import RelatedAndOutfits from './components/relatedItems/RelatedAndOutfits';
import Logo from './components/Logo';
// Utility
import getUrlProductId from './helpers/getUrlProductId';

function App(props) {
  const currentId = useSelector(({ currentProductId }) => currentProductId);
  const dis = useDispatch();
  const id = getUrlProductId(props.location.pathname);

  useEffect(() => {
    if(props.location.pathname.length > 1) {
      dis(changeProduct(id));
    } else {
      dis(changeProduct(11003));
    }
  },[]);

  return (
    currentId ?
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <Logo />
            <div className="overview-container">
              <Overview/>
            </div>
            <section className="col-center">
              <RelatedAndOutfits />
            </section>
          </Route>
        </Switch>
      </BrowserRouter>
      : null
  );
}

// Prop Checking ----------------
App.propTypes = {
  pathname: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired
};

export default withRouter(App);
