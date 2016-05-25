import React from 'react'
import { render } from 'react-dom'
import App from './components/app'
<<<<<<< HEAD

render(<App name='Tony Luisi' />, document.getElementById('main'))
console.log('welcome to site-refresh')
=======
import Main from './components/app/main'
import About from './components/app/about'
import Contact from './components/app/contact'
import CV from './components/app/cv'
import Projects from './components/app/projects'
import Blog from './components/app/blog'
import {Router, Route, Link, hashHistory, IndexRoute} from 'react-router'

render(
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Main}/>
      <Route path='about' component={About} />
      <Route path='contact' component={Contact} />
      <Route path='cv' component={CV} />
      <Route path='projects' component={Projects} />
      <Route path='blog' component={Blog} />
    </Route>
  </Router>
  , document.querySelector('main'))
>>>>>>> 40a4f37c484ff7a8aff1f7a9857a4a6d5e9a4f49
