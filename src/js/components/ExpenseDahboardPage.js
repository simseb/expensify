import React from 'react'
import { connect } from 'react-redux'
import RenderExpense from './RenderExpense'
import RenderSummary from './RenderSummary'
import getFilteredExpenses from '../selectors/expenses'
import ExpensesFilter from './ExpensesFilters'

class RenderExpenseDashboard extends React.Component {
  render () {
    return (
      <div>
        <RenderSummary />
        <ExpensesFilter />
        <h2>Expense List</h2>
        {this.props.expenses.map((expense) => (
          <RenderExpense key={expense.description} dispatch={this.props.dispatch} {...expense} />
        ))}
      </div>
    )
  }
}

const Connected = connect((state) => {
  return {
    expenses: getFilteredExpenses(state.expenses, state.filters)
  }
})(RenderExpenseDashboard)

export default Connected
