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
import Home from 'components/Home';
import Footer from 'components/Footer';
import AboutUs from 'components/AboutUs';

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
          path="/about-us"
          component={AboutUs}>
        </Route>
        <Footer />
      </div>
    </Router>
  </Provider>
), document.getElementById('root'));

[].forEach.call(document.querySelectorAll('img[data-src]'), img =>  {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = () => {
    img.removeAttribute('data-src');
  };
});
