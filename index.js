import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
import Main from './components/app/main'
import About from './components/app/about'
import Contact from './components/app/contact'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main}/>
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
    </Route>
  </Router>
  , document.querySelector('main'))
