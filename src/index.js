import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'

import counterReducer from './store/reducers/counter'
import resultsReducer from './store/reducers/results'

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultsReducer,
})
// Middleware 
const logger = store => {
    // console.log(`[Middleware store]`, store) // argument 'store' agar dapat menggunkaan fungsi dispatch dan getState 
    return next =>  {
        // console.log(`[Middleware next]`, next)
        return action => {
            // console.log(`[Middleware Action] dispatching`, action )
            const result = next(action);
            console.log(`[Middleware result]`, store.getState())
            // console.log(`[Middleware result]`, result)
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers( applyMiddleware(logger,thunk)));
console.log(store)


ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
