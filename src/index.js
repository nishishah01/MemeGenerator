import React from 'react';
import ReactDOM from "react-dom";
import App from './components/App';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux'; //combines react and redux terminology togeter




import { fetchMemes } from './actions';
import rootReducer from './reducers';
const store = configureStore({
  reducer: rootReducer
});
store.subscribe(()=>console.log('store',store.getState())); //to print what is happening in the state
store.dispatch(fetchMemes());


ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
    
    document.getElementById('root')
  
);

export default store;

