import _ from 'lodash';
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import GenerateField from './GenerateField';

const FIELDS = [
  { label: 'Title', name: 'title' },
  { label: 'Title', name: 'color' },
  { label: 'Title', name: 'name' },
  { label: 'Title', name: 'id' }
];

class GenerateForm extends Component {
  renderFields() {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={GenerateField}
          type="text"
          label={label}
          name={name}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <h1>GenerateForm</h1>
        <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)}>
          {this.renderFields()}
          <button type="submit">Crear</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = 'Requerido';
    }
  });

  return errors;
}

export default reduxForm({
  validate,
  form: 'generateForm',
  destroyOnUnmount: false
})(GenerateForm);
