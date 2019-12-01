import React from 'react'
import Component from './Component'
import PageEmployee from './PageEmployee'
import PageEmployeeList from './PageEmployeeList'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

const App = () => (
<div>
  <h1>Minimal React</h1>
  <h3>Lab_8 Nikita Zakharov</h3>
    <Router >
        <Switch>
          <Route exact path="/">
            <PageEmployeeList/>
          </Route>
          <Route path="/new">
            <PageEmployee/>
          </Route>
        </Switch>
      </Router>
  </div>
)

export default App