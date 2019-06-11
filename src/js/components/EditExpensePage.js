import React from 'react'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses'
import RenderExpenseForm from './ExpenseForm'

class RenderEditExpense extends React.Component {
  deleteExpense = () => {
    this.props.dispatch(removeExpense(this.props.expense.id))
    this.props.history.push('/')
  }

  render () {
    return (
      <div>
        Editing {this.props.match.params.id}
        <RenderExpenseForm expense={this.props.expense} onSubmit={(expense) => {
          this.props.dispatch(editExpense(this.props.match.params.id, expense))
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
