import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import App from './components/App';
import Generate from './components/Generate/Generate';

import reducers from './reducers';
import './styles/reset.css';
import './styles/main.css';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="app-main">
          <Route exact path="/" component={App} />
          <Route path="/generate" component={Generate} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// console.log('Environment is', process.env.NODE_ENV);
// console.log('Mode is', process.env.REACT_APP_MODE);
