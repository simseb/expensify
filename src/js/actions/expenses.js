import { database } from '../firebase/firebase'
// const uuidv1 = require('uuid/v1')

// ADD_EXPENSE
// export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuidv1(),
//     description,
//     note,
//     amount,
//     createdAt
//   }
// })

// Action generator foarte simplificat; nu mai folosim nici uuid, pentru ca are Firebase
export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
})

// O alta modalitate interesanta de a folosi default parameters si destructuring
export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData
    const expense = { description, note, amount, createdAt }

    // Save data to Firebase
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

// ADD_EXPENSES (from Firebase)
export const addExpenses = (expenses) => ({
  type: 'ADD_EXPENSES',
  expenses
})

export const startAddExpenses = () => {
  return (dispatch) => {
    // Get data from Firebase
    return database.ref(`expenses`)
      .once('value')
      .then((snapshot) => {
        const expenses = []
        snapshot.forEach((child) => {
          expenses.push({
            id: child.key, // avem acces la acel random string
            ...child.val()
          })
        })
        dispatch(addExpenses(expenses))
      })
  }
}

// REMOVE_EXPENSE
// export const removeExpense = (id = '') => ({
//   type: 'REMOVE_EXPENSE',
//   id
// })

// Simplificat
export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const startRemoveExpense = (id = '') => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`)
      .remove()
      .then(() => {
        dispatch(removeExpense(id))
      })
  }
}

// EDIT_EXPENSE
// export const editExpense = (id = '', updates = {}) => ({
//   type: 'EDIT_EXPENSE',
//   id,
//   updates
// })

// Simplificat
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

export const startEditExpense = (id = '', updates = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`)
      .update(updates)
      .then(() => {
        dispatch(editExpense(id, updates))
      })
  }
}
