import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
const store = createStore(reducer, middleware)



ReactDOM.render(
  <Provider store={store}>
	<BrowserRouter basename={process.env.PUBLIC_URL}>
	    <App />
	</BrowserRouter>
  </Provider>,
document.getElementById('root')
)
