import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
// import { PersistGate } from 'redux-persist/integration/react';
import { store } from 'components/redux/store';
import  App from 'components/App';
import 'modern-normalize/modern-normalize.css';
import './styles.css';

console.log(store);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
       {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);