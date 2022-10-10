import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store, {persistor} from './redux/Store'
import App from './App';
import ContextProvider from './components/context/ContextProvider';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/es/integration/react';
import { transitions, positions, Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

const root = ReactDOM.createRoot(document.getElementById('root'));

// optional configuration
const options = {
  // you can also just use 'bottom center'
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  // you can also just use 'scale'
  transition: transitions.SCALE
}

root.render(
<Provider store={store} >
   <React.StrictMode> 
    <AlertProvider template={AlertTemplate} {...options}>
   <PersistGate persistor={persistor}>
    
      <App />
    </PersistGate>
     </AlertProvider>
   </React.StrictMode> 
  </Provider>
);


