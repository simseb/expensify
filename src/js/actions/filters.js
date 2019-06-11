// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SET_SORT_BY_AMOUNT
export const setSortByAmount = () => ({
  type: 'SET_SORT_BY_AMOUNT'
})

// SET_SORT_BY_DATE
export const setSortByDate = () => ({
  type: 'SET_SORT_BY_DATE'
})

// SET_START_DATE
export const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date
})

// SET_END_DATE
export const setEndDate = (date = undefined) => ({
  type: 'SET_END_DATE',
  date
})
