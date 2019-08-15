import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import './css/index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
//import thunk from 'redux-thunk';
const store = createStore(reducer, middleware)

//const store = createStore(reducer, applyMiddleware(thunk));


ReactDOM.render(
  <Provider store={store}>
	<BrowserRouter>
	    <App />
	</BrowserRouter>
  </Provider>,
document.getElementById('root')
)