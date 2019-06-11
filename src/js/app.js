// Styles
import '../sass/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'

import storeCfg from './store/store'

const store = storeCfg()

const jsx = (
  <Provider store={store}>
    { AppRouter }
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
