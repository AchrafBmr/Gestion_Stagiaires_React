import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { reducer } from './config/Reducer';
import { legacy_createStore } from 'redux';


const str= legacy_createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={str}><App/></Provider>);

