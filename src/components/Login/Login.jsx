import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLength10, required } from '../../utils/validators/validators';
import { Input } from '../FormElements/Textarea';

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
            component={Input}
            name={'login'}
            validate={[required, maxLength10]}
          />
        </div>
        <div>
          <Field
            placeholder={'Your password'}
            component={Input}
            type={'password'}
            name={'pass'}
            validate={[required, maxLength10]}
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
