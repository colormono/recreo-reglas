import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from '../actions';

class Header extends Component {
  renderButton() {
    if (this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(false)}>Sign out</button>
      );
    }
    return <button onClick={() => this.props.changeAuth(true)}>Sign in</button>;
  }

  render() {
    //console.log(this.props);

    return (
      <header className="app-header">
        <nav>
          <div className="header-logo">
            <Link to="/">REGLAS DEL RECREO</Link>
          </div>
          <ul>
            <li>
              <a href="/kittens">Kittens</a>
            </li>
            <li>{this.renderButton()}</li>
          </ul>
        </nav>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    timbre: state.timbre,
    auth: state.auth
  };
}

export default connect(
  mapStateToProps,
  actions
)(Header);
