import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        {/* <StoreContext.Provider value={store}>
          <App />
        </StoreContext.Provider> */}
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
  );
};

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});

rerenderEntireTree(store.getState());

reportWebVitals();
