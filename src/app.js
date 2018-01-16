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
import AboutUsView from 'views/AboutUs';
import AreaStandardsView from 'views/AreaStandards';
import ContractorsView from 'views/Contractors';
import HomeView from 'views/Home';
import SignUpView from 'views/SignUp';
import PoliticalCornerView from 'views/PoliticalCorner';
import TrainingView from 'views/Training';
import WorkerAbuseView from 'views/WorkerAbuse';

require('./app.scss');

const store = createStore(reducer, applyMiddleware(thunk));

render((
  <Provider store={store}>
    <Router>
      <div className="app">
        <Route
          exact
          path="/"
          component={HomeView}>
        </Route>
        <Route
          exact
          path="/about"
          component={AboutUsView}>
        </Route>
        <Route
          path="/area-standards"
          component={AreaStandardsView}>
        </Route>
        <Route
          path="/contractors"
          component={ContractorsView}>
        </Route>
        <Route
          path="/member-benefits"
          component={SignUpView}>
        </Route>
        <Route
          path="/sign-up"
          component={SignUpView}>
        </Route>
        <Route
          path="/politics"
          component={PoliticalCornerView}>
        </Route>
        <Route
          path="/training"
          component={TrainingView}>
        </Route>
        <Route
          path="/abuse"
          component={WorkerAbuseView}>
        </Route>
        <Footer />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
