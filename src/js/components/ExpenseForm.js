import React from 'react'
import 'react-dates/initialize'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'
const moment = require('moment')

class RenderExpenseForm extends React.Component {
    state = {
      description: this.props.expense ? this.props.expense.description : '',
      note: this.props.expense ? this.props.expense.note : '',
      amount: this.props.expense ? (this.props.expense.amount).toString() : '',
      createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
      focused: false,
      error: undefined
    }

    onDescriptionChange = (e) => {
      const description = e.target.value
      this.setState(() => ({ description }))
    }

    onNoteChange = (e) => {
      const note = e.target.value
      this.setState(() => ({ note }))
    }

    onAmountChange = (e) => {
      const amount = e.target.value

      if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
        this.setState(() => ({ amount }))
      }
    }

    onDateChange = (createdAt) => {
      if (createdAt) {
        this.setState(() => ({ createdAt }))
      }
    }

    onSubmit = (e) => {
      e.preventDefault()

      if (!this.state.description || !this.state.amount) {
        this.setState(() => ({ error: 'Please provide some description and amount!' }))
      } else {
        this.setState(() => ({ error: undefined }))
        this.props.onSubmit({
          description: this.state.description,
          // amount: parseFloat(this.state.amount, 10) * 100,
          amount: this.state.amount,
          createdAt: this.state.createdAt.valueOf(),
          note: this.state.note
        })
      }
    }

    render () {
      return (
        <div>
          <form onSubmit={this.onSubmit}>
            {this.state.error && <p>{this.state.error}</p>}
            <input type='text' placeholder='Description' autoFocus onChange={this.onDescriptionChange} value={this.state.description} />
            <input type='text' placeholder='Amount' value={this.state.amount} onChange={this.onAmountChange} />
            <SingleDatePicker
              date={this.state.createdAt}
              onDateChange={this.onDateChange}
              focused={this.state.focused}
              onFocusChange={({ focused }) => this.setState({ focused })}
              id='your_unique_id'
              numberOfMonths={1}
              isOutsideRange={() => false}
            />
            <textarea placeholder='Add a note for your expense...' value={this.state.note} onChange={this.onNoteChange} />
            <button>Add Expense</button>
          </form>
        </div>
      )
    }
}

export default RenderExpenseForm
