import React, {useEffect} from 'react';
import Overview from './components/overview/Overview';
import RelatedAndOutfits from './components/relatedItems/RelatedAndOutfits';
import { useSelector, useDispatch} from 'react-redux';
import changeProduct from '../store/actions/changeProduct';
import { BrowserRouter, Route, Switch, withRouter} from 'react-router-dom';
function App(props) {
  const currentId = useSelector(({ currentProductId }) => currentProductId);
  const dis = useDispatch();

  var pathName = props.location.pathname;
  var id = pathName.slice(10);
  if (id[id.length - 1] === '/') {
    id = id.slice(0, id.length - 1);
  }
  id = parseInt(id);
  console.log(id);


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
            <section className='overview'>
              <Overview/>
            </section>
            <section className="col-center">
              <RelatedAndOutfits />
            </section>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  } else {
    return <span>loading product info</span>;
  }
}


export default withRouter(App);
