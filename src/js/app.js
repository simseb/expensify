// Styles
import '../sass/main.scss'

import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routes/AppRouter'
import { Provider } from 'react-redux'

import storeCfg from './store/store'
import { addExpense } from './actions/expenses'
import getFilteredExpenses from './selectors/expenses'

const store = storeCfg()

store.dispatch(addExpense({
  description: 'Gas Bill',
  note: 'Factura la gaz.',
  amount: 202,
  createdAt: 999999999999
}))

store.dispatch(addExpense({
  description: 'Telephone Bill',
  note: 'Factura la RDS.',
  amount: 101,
  createdAt: 99999999999
}))

store.dispatch(addExpense({
  description: 'Water Bill',
  note: 'Factura la apa calda si rece.',
  amount: 303,
  createdAt: 999999
}))

// store.dispatch(setSortByAmount())

// setTimeout(() => {
//   store.dispatch(setTextFilter('gas'))
// }, 3000)

console.log(getFilteredExpenses(store.getState().expenses, store.getState().filters))

const jsx = (
  <Provider store={store}>
    { AppRouter }
  </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
