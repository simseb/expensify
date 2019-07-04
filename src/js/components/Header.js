import React from 'react'
import { NavLink } from 'react-router-dom'

class RenderHeader extends React.Component {
  render () {
    return (
      <header>
        <h1>Expensify</h1>
        <NavLink to='/' activeClassName='is-active' exact>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create</NavLink>
        {/* <NavLink to='/edit' activeClassName='is-active'>Edit</NavLink> */}
        <NavLink to='/help' activeClassName='is-active'>Help</NavLink>
      </header>
    )
  }
}

export default RenderHeader
