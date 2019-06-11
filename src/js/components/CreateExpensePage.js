import React from 'react'
import RenderExpenseForm from './ExpenseForm'
import { addExpense } from '../actions/expenses'
import { connect } from 'react-redux'

class RenderCreateExpense extends React.Component {
  render () {
    return (
      <div>
        <h2>Create an Expense</h2>
        <RenderExpenseForm onSubmit={(expense) => {
          this.props.dispatch(addExpense(expense))
          this.props.history.push('/')
        }} />
      </div>
    )
  }
}

export default connect()(RenderCreateExpense)
