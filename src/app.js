import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import Footer from 'components/Footer';
import AboutUs from 'views/AboutUs';
import AreaStandards from 'views/AreaStandards';
import Contractors from 'views/Contractors';
import Home from 'views/Home';
import Members from 'views/Members';
import PoliticalCorner from 'views/PoliticalCorner';
import Training from 'views/Training';
import WorkerAbuse from 'views/WorkerAbuse';

require('./app.scss');

const store = createStore(reducer, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router>
      <div className="app">
        <Route
          exact
          path="/"
          component={Home}>
        </Route>
        <Route
          exact
          path="/about-us"
          component={AboutUs}>
        </Route>
        <Route
          path="/area-standards"
          component={AreaStandards}>
        </Route>
        <Route
          path="/contractors"
          component={Contractors}>
        </Route>
        <Route
          path="/members"
          component={Members}>
        </Route>
        <Route
          path="/political-corner"
          component={PoliticalCorner}>
        </Route>
        <Route
          path="/training"
          component={Training}>
        </Route>
        <Route
          path="/worker-abuse"
          component={WorkerAbuse}>
        </Route>
        <Footer />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
