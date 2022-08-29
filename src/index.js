import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './redux/Store'
import App from './App';
import ContextProvider from './components/context/ContextProvider';
import {Provider} from 'react-redux'

// console.log(store);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <Provider store={store} >
   <React.StrictMode> 
   
    
      <App />
    
     
   </React.StrictMode> 
  </Provider>
);


