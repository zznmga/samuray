import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
//import store from './redux/redux-store';
//import { BrowserRouter } from 'react-router-dom';
//import { Provider } from 'react-redux';
import SamurajJSApp from './App';

// ReactDOM.render(
//   //<React.StrictMode>
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>,
//   //</React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(<SamurajJSApp />, document.getElementById('root'));

reportWebVitals();
