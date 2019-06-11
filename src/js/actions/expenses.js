const uuidv1 = require('uuid/v1')

// ADD_EXPENSE
export const addExpense = ({ description = '', note = '', amount = 0, createdAt } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuidv1(),
    description,
    note,
    amount,
    createdAt
  }
})

// REMOVE_EXPENSE
export const removeExpense = (id = '') => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
export const editExpense = (id = '', updates = {}) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})
