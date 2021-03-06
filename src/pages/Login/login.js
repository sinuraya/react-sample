import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';


const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }
  return errors;
};

const Login = ({
  submitting,
  handleSubmit,
  submitForm
}) => (
  <div className="container col-md-4 col-md-offset-4">
    <div className="header">
      <h4>Please Sign In </h4>
    </div>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="control-label">Email</label>
          <Field
            name="email"
            type="email"
            component={renderField} />
        </div>

        <div className="form-group">
          <label className="control-label">Password</label>
          <Field
            name="password"
            type="password"
            component={renderField} />
        </div>

        <Field
          name="remember"
          type="checkbox"
          component={renderField}
          label="Remember me!" />

        <button type="submit" className="btn btn-fill btn-info" disabled={submitting}>Submit</button>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'login',
  validate
})(Login)