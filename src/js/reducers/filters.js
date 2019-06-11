import moment from 'moment'

const filterDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: moment().startOf('month').valueOf(),
  endDate: moment().endOf('month').valueOf()
}

const filterReducer = (state = filterDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
    case 'SET_SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date
      }
    default:
      return state
  }
}

export default filterReducer
