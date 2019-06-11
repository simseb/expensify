import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, setSortByDate, setSortByAmount, setStartDate, setEndDate } from '../actions/filters'
import { DateRangePicker } from 'react-dates'
import moment from 'moment'

class ExpensesFilters extends React.Component {
  state = {
    focused: null
  }

  updateState1 = (event) => {
    this.props.dispatch(setTextFilter(event.target.value))
  }

  updateState2 = (event) => {
    if (event.target.value === 'date') {
      this.props.dispatch(setSortByDate())
    } else if (event.target.value === 'amount') {
      this.props.dispatch(setSortByAmount())
    }
  }

  updateState3 = (obj) => {
    this.props.dispatch(setStartDate(obj.startDate.valueOf()))
    this.props.dispatch(setEndDate(obj.endDate.valueOf()))
  }

  render () {
    return (
      <div>
        <input type='text' value={this.props.filters.text} onChange={this.updateState1} />
        <select value={this.props.filters.sortBy} onChange={this.updateState2}>
          <option value='date'>Date</option>
          <option value='amount'>Amount</option>
        </select>
        <DateRangePicker
          startDate={moment(this.props.filters.startDate)} // momentPropTypes.momentObj or null,
          startDateId='start_date_id' // PropTypes.string.isRequired,
          endDate={moment(this.props.filters.endDate)} // momentPropTypes.momentObj or null,
          endDateId='end_date_id' // PropTypes.string.isRequired,
          onDatesChange={this.updateState3} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
          isOutsideRange={() => false}
          readOnly
          showClearDates
          numberOfMonths={1}
        />
      </div>
    )
  }
}

const Connected = connect((state) => {
  return {
    filters: state.filters
  }
})(ExpensesFilters)

export default Connected
