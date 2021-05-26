import React from 'react';
import { Field, reduxForm } from 'redux-form';

const Login = (props) => {
  let handler = (values) => {
    console.log('values ', values);
  };
  return (
    <div>
      <h1>Login Page</h1>
      <div>
        <LoginReduxForm onSubmit={handler} />
      </div>
    </div>
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
            component={'input'}
            name={'login'}
          />
        </div>
        <div>
          <Field
            placeholder={'Your password'}
            component={'input'}
            type={'password'}
            name={'pass'}
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

export default Login;
