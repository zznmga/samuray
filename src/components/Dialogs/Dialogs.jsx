import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength10, required } from '../../utils/validators/validators';
import { Textarea } from '../common/FormControls/FormControls';

const Dialogs = (props) => {
  let state = props.dialogsPage;
  let newMessageBody = state.newMessageBody;

  const dialogsData = state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  const messagesData = state.messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  const onSubmit = (values) => {
    console.log('onSubmit', values);
    props.sendMessage(values.newMessageBody);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsData} </div>
      <div className={s.messages}>
        {messagesData}
        <div>
          <DialogReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

const DialogForm = (props) => {
  console.log('DialogForm', props);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={'newMessageBody'}
            component={Textarea}
            validate={[required, maxLength10]}
          ></Field>
        </div>
        <div>
          <button>Add Message</button>
        </div>
      </form>
    </div>
  );
};

let DialogReduxForm = reduxForm({ form: 'dialog' })(DialogForm);

export default Dialogs;
