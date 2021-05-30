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
import { Input } from '../common/FormControls/FormControls';

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

const LoginForm = (props) => {
  console.log('LoginForm render');

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder={'Your login'}
            component={Input}
            name={'login'}
            validate={[required, maxLength30]}
          />
        </div>
        <div>
          <Field
            placeholder={'Your password'}
            component={Input}
            type={'password'}
            name={'pass'}
            validate={[required, maxLength30]}
          />
        </div>
        <div>
          <Field component={'input'} type={'checkbox'} name={'rememberMe'} />
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

let LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const mapStateToProps = (state) => ({ isAuth: state.auth.isAuth });
export default connect(mapStateToProps, { login, logout })(Login);
