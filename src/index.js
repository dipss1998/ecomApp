import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store, {persistor} from './redux/Store'
import App from './App';
import ContextProvider from './components/context/ContextProvider';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react';
// console.log(store);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<Provider store={store} >
   <React.StrictMode> 
   <PersistGate persistor={persistor}>
    
      <App />
    </PersistGate>
     
   </React.StrictMode> 
  </Provider>
);


