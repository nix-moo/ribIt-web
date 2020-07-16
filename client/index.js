import React from 'react'
import ReactDOM from 'react-dom'
// import {Provider} from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'
import history from './history'
// import store from './store'
import App from './app'


ReactDOM.render(

    <Router>
      <App />
    </Router>,
  document.getElementById('app')
)

/*
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('app')
)
 */
