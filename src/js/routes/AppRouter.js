import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import RenderExpenseDashboard from '../components/ExpenseDahboardPage.js'
import RenderCreateExpense from '../components/CreateExpensePage'
import RenderEditExpense from '../components/EditExpensePage'
import RenderHelp from '../components/HelpPage'
import Render404 from '../components/404Page'
import RenderHeader from '../components/Header'

const routes = (
  <div>
    <BrowserRouter>
      <RenderHeader />
      <Switch>
        <Route path='/' component={RenderExpenseDashboard} exact />
        <Route path='/create' component={RenderCreateExpense} />
        <Route path='/edit/:id' component={RenderEditExpense} />
        <Route path='/help' component={RenderHelp} />
        <Route component={Render404} />
      </Switch>
    </BrowserRouter>
  </div>
)

export default routes
