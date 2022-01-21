import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Router from './router/Router'
import axios from 'axios'
const App = () => { return <Router /> }

axios.defaults.baseURL = 'http://api.github.com/' // E.G

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
