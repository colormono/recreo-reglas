import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions';

class GenerateReview extends Component {
  render() {
    const { onCancel, formValues, generatePattern, history } = this.props;

    return (
      <div>
        <h1>Resultado</h1>
        {formValues.title}
        <hr />
        <button onClick={onCancel}>Cancelar</button>
        <button onClick={() => generatePattern(formValues, history)}>
          Send
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    formValues: state.form.generateForm.values
  };
}

export default connect(
  mapStateToProps,
  actions
)(withRouter(GenerateReview));
