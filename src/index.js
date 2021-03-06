import React from 'react';
import ReactDOM from 'react-dom';
import { creatStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,    
    document.getElementById('root'));
registerServiceWorker();
