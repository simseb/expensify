const expensesDefaultState = []
const expensesReducer = (state = expensesDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
    case 'ADD_EXPENSES':
      return action.expenses // overwrite the array completely
    case 'REMOVE_EXPENSE':
      return state.filter(expense => expense.id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense => expense.id === action.id ? { ...expense, ...action.updates } : expense)
    default:
      return state
  }
}

export default expensesReducer
