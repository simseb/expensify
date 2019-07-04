import React from 'react'
import { connect } from 'react-redux'
import { startEditExpense, startRemoveExpense } from '../actions/expenses'
import RenderExpenseForm from './ExpenseForm'

class RenderEditExpense extends React.Component {
  deleteExpense = () => {
    this.props.dispatch(startRemoveExpense(this.props.expense.id))
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        <RenderExpenseForm expense={this.props.expense} onSubmit={(expense) => {
          this.props.dispatch(startEditExpense(this.props.match.params.id, expense))
          this.props.history.push('/')
        }} />
        <button onClick={this.deleteExpense}>Remove</button>
      </div>
    )
  }
}

export default connect((state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      return expense.id === props.match.params.id
    })
  }
})(RenderEditExpense)
