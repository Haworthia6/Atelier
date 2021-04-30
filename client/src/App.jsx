import React, {useEffect} from 'react';
import Overview from './components/overview/Overview';
import RelatedAndOutfits from './components/relatedItems/RelatedAndOutfits';
import { useSelector, useDispatch} from 'react-redux';
import changeProduct from '../store/actions/changeProduct';
import { BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
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

  if (currentId) {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/'>
            <div className="logo">
              <h1>Haworthia</h1>
            </div>

            <div className="overview-container">
              <Overview/>
            </div>
            <section className="col-center">
              <RelatedAndOutfits />
            </section>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  } else {
    return null;
  }
}


export default withRouter(App);
