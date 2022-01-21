import React from 'react'
import ReactDOM from 'react-dom'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import Router from './router/Router'

const App = () => { return <Router /> }

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
