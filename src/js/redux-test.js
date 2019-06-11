// import { createStore, combineReducers } from 'redux'
// const moment = require('moment')
// const uuidv1 = require('uuid/v1')

// // const demoState = {
// //   expenses: [
// //     {
// //       id: 'asdasdasda',
// //       description: 'January Rent',
// //       note: 'This was the final payment for that address.',
// //       amount: 50000,
// //       createdAt: 123193871239
// //     }
// //   ],
// //   filters: {
// //     text: 'rent', // filter by text
// //     sortBy: 'date', // sort by date, amount
// //     startDate: undefined,
// //     endDate: undefined
// //   }
// // }

// // The Actions

// // ADD_EXPENSE
// const addExpense = ({ description = '', note = '', amount = 0 } = {}) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuidv1(),
//     description,
//     note,
//     amount,
//     createdAt: +new Date() // A unary operator like plus triggers the valueOf method in the Date object and it returns the timestamp (without any alteration)
//   }
// })

// // REMOVE_EXPENSE
// const removeExpense = (id = '') => ({
//   type: 'REMOVE_EXPENSE',
//   id
// })

// // EDIT_EXPENSE
// const editExpense = (id = '', updates = {}) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// })

// // SET_TEXT_FILTER
// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// })

// // SET_SORT_BY_AMOUNT
// const setSortByAmount = () => ({
//   type: 'SET_SORT_BY_AMOUNT'
// })

// // SET_SORT_BY_DATE
// const setSortByDate = () => ({
//   type: 'SET_SORT_BY_DATE'
// })

// // SET_START_DATE
// const setStartDate = (date = undefined) => ({
//   type: 'SET_START_DATE',
//   date
// })

// // SET_END_DATE
// const setEndDate = (date = undefined) => ({
//   type: 'SET_END_DATE',
//   date
// })

// // The Reducers
// const expensesDefaultState = []
// const expensesReducer = (state = expensesDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [
//         ...state,
//         action.expense
//       ]
//     case 'REMOVE_EXPENSE':
//       return state.filter(expense => expense.id !== action.id)
//     case 'EDIT_EXPENSE':
//       return state.map(expense => expense.id === action.id ? { ...expense, ...action.updates } : expense)
//     default:
//       return state
//   }
// }

// const filterDefaultState = {
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
// }
// const filterReducer = (state = filterDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_TEXT_FILTER':
//       return {
//         ...state,
//         text: action.text
//       }
//     case 'SET_SORT_BY_AMOUNT':
//       return {
//         ...state,
//         sortBy: 'amount'
//       }
//     case 'SET_SORT_BY_DATE':
//       return {
//         ...state,
//         sortBy: 'date'
//       }
//     case 'SET_START_DATE':
//       return {
//         ...state,
//         startDate: action.date
//       }
//     case 'SET_END_DATE':
//       return {
//         ...state,
//         endDate: action.date
//       }
//     default:
//       return state
//   }
// }

// // The Store
// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters: filterReducer
//   })
// )

// // Watch the state
// // store.subscribe(() => {
// //   console.log(store.getState())
// // })

// // The Dispatchers
// const expense1 = store.dispatch(addExpense({
//   description: 'Rent',
//   note: 'Chiria pe luna Iunie',
//   amount: 1300
// }))

// const expense2 = store.dispatch(addExpense({
//   description: 'Beer',
//   note: 'One 6-pack of Heineken',
//   amount: 20
// }))

// // store.dispatch(removeExpense(expense1.expense.id))

// store.dispatch(editExpense(expense2.expense.id, {
//   description: 'Ursus',
//   amount: 14
// }))

// // store.dispatch(setTextFilter('rent'))

// store.dispatch(setSortByAmount())
// // store.dispatch(setSortByDate())

// // store.dispatch(setStartDate(-1000))
// // store.dispatch(setEndDate(1000))

// // const renderData = () => {
// //   const state = store.getState()

// // console.log(sortByAmount)
// const getFilteredExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
//   return expenses.filter((expense) => {
//     console.log(text)
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
//     const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
//     const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
//     return textMatch && startDateMatch && endDateMatch
//   }).sort((a, b) => {
//     if (sortBy === 'date') {
//       return a.createdAt < b.createdAt ? -1 : 1
//     }
//     if (sortBy === 'amount') {
//       return a.amount < b.amount ? -1 : 1
//     }
//   })
// }

// console.log(getFilteredExpenses(store.getState().expenses, store.getState().filters))
