import React from 'react'
import { Link } from 'react-router-dom'

class Render404 extends React.Component {
  render () {
    return (
      <div>
        <Link to='/'>Go Home</Link>
      </div>
    )
  }
}

export default Render404
