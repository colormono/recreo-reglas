import React, { Component } from 'react';
import { connect } from 'react-redux';

class Timbre extends Component {
  renderKittens() {
    //console.log(this.props);

    return 'Kittens';
  }

  renderContent() {
    switch (this.props.timbre) {
      case null:
        return 'Loading...';
      case false:
        return 'Error';
      default:
        return this.renderKittens();
    }
  }

  render() {
    return (
      <section>
        <h3>Timbre</h3>
        {this.renderContent()}
      </section>
    );
  }
}

function mapStateToProps({ timbre }) {
  return { timbre };
}

export default connect(mapStateToProps)(Timbre);
