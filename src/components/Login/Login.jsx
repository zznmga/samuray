import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { login, logout } from '../../redux/auth-reducer';
import {
  maxLength10,
  maxLength30,
  required,
} from '../../utils/validators/validators';
import { createField, Input } from '../common/FormControls/FormControls';
import styles from '../../components/common/FormControls/FormControls.module.css';

const Login = (props) => {
  let handler = (values) => {
    console.log('values ', values);
    props.login(values.login, values.pass, values.rememberMe);
  };

  return !props.isAuth ? (
    <div>
      <h1>Login Page</h1>
      <div>
        <LoginReduxForm onSubmit={handler} />
      </div>
    </div>
  ) : (
    <Redirect to={'/profile'} />
  );
};

const LoginForm = ({ handleSubmit, error }) => {
  console.log('LoginForm render');

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {createField('Your login', 'login', [required, maxLength30], Input)}

        {createField('Your password', 'pass', [required, maxLength30], Input, {
          type: 'password',
        })}

        {createField(
          null,
          'rememberMe',
          null,
          Input,
          { type: 'checkbox' },
          'remember me'
        )}

        <div>
          <button>Login</button>
        </div>
        {error && <div className={styles.formSummaryError}>{error}</div>}
      </form>
    </div>
  );
};

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });
export default connect(mapStateToProps, { login, logout })(Login);
