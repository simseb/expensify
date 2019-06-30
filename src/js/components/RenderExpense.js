import React from 'react'
import { Link } from 'react-router-dom'
const moment = require('moment')
const numeral = require('numeral')

class RenderExpense extends React.Component {
  render () {
    return (
      <div>
        <Link to={`/edit/${this.props.id}`}>{this.props.description}</Link>
        <p>{numeral(this.props.amount).format('$0,0[.]00')} - {moment(this.props.createdAt).format('MMMM Do, YYYY')}</p>
      </div>
    )
  }
}

export default RenderExpense
