import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import GenerateForm from './GenerateForm';
import GenerateReview from './GenerateReview';

class Generate extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <GenerateReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <GenerateForm
        onFormSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return (
      <div>
        <h1>Generate</h1>
        {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'generateForm'
})(Generate);
