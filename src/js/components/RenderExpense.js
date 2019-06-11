import React from 'react'
import { Link } from 'react-router-dom'
const moment = require('moment')

class RenderExpense extends React.Component {
  render () {
    return (
      <div>
        <Link to={`/edit/${this.props.id}`}>{this.props.description}</Link>
        <p>{this.props.amount} - {moment.unix(this.props.createdAt / 1000).format('DD MMMM YYYY')}</p>
      </div>
    )
  }
}

export default RenderExpense
