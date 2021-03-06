import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import ReactGA from 'react-ga';
import Amplify from 'aws-amplify';
import aws_exports from 'aws-exports';
import { push as Menu } from 'react-burger-menu'

import reducer from './reducers';
import Footer from 'components/Footer';
import Static from 'containers/Static';
import AboutUsView from 'views/AboutUs';
import AreaStandardsView from 'views/AreaStandards';
import SignUpView from 'views/SignUp';
import ContractorsView from 'views/Contractors';
import HomeView from 'views/Home';
import PoliticalCornerView from 'views/PoliticalCorner';
import TrainingView from 'views/Training';
import WorkerAbuseView from 'views/WorkerAbuse';
import DashboardView from './views/Dashboard';
import Nav from './components/nav';

require('./app.scss');

/**
|--------------------------------------------------
| AWS Amplify configuration
|--------------------------------------------------
*/
Amplify.configure(aws_exports);

/**
|--------------------------------------------------
| Google Analytics init &  middleware
|--------------------------------------------------
*/
const ga_token = document.getElementById("root").getAttribute('data-ga-token');
ReactGA.initialize(ga_token);

const ga = store => next => action => {
  ReactGA.event({
    category: 'REDUX_ACTION',
    action: action.type
  });
  return next(action);
}

/**
|--------------------------------------------------
| REDUX Store set-up
|--------------------------------------------------
*/
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(promiseMiddleware(), thunk, ga)
));

/**
|--------------------------------------------------
| Hook up react app to root div
|--------------------------------------------------
*/
render((
  <Provider store={store}>
    <Router>
      <div>
        <Menu right pageWrapId={ "page-wrap" } outerContainerId={ "root" }>
          <Nav />
        </Menu>
        <div className="app" id="page-wrap">
          <Route
            exact
            path="/(|sign-in|sign-up)/"
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
          <Route
            path="/dashboard"
            component={DashboardView}>
          </Route>
          <Footer />
          <Static />
        </div>
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));
