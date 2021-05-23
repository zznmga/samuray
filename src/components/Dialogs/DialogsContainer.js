import React from 'react';
import Dialogs from './Dialogs';

import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from '../../redux/dialogs-reducer';
//import StoreContext from '../../StoreContext';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// const DialogsContainer = (props) => {
//   return (
//     <StoreContext.Consumer>
//       {(store) => {
//         let state = store.getState().dialogPage;

//         let onSendMessage = () => {
//           store.dispatch(sendMessageCreator());
//         };

//         let onChangeMessage = (message) => {
//           store.dispatch(updateNewMessageBodyCreator(message));
//         };

//         return (
//           <Dialogs
//             sendMessage={onSendMessage}
//             changeMessage={onChangeMessage}
//             dialogsPage={state}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = (state) => {
  console.log('mapStateToProps', state);
  return {
    dialogsPage: state.dialogsPage,
    age: 39,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      let action = sendMessageCreator();
      dispatch(action);
    },
    changeMessage: (message) => {
      let action = updateNewMessageBodyCreator(message);
      console.log('Before dispatch changeMessage');
      dispatch(action);
    },
  };
};

export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Dialogs);
