import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Footer from './Footer';
//import Timbre from './Timbre';
import TimbreWS from './TimbreWS';
import Generate from './generate/Generate';

const Dashboard = () => <h2>Dashboard</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchKittens();
  }

  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/generate" component={Generate} />
            <TimbreWS />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(App);
