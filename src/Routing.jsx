import { Switch,Route } from "react-router-dom"
import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Services from './Services'
import Contact from './Contact'
import Navigation from "./Navigation"

import Experience from "./Experience"
function Routing() {
  console.log('Rendering Routing component...');
  return (
        <>
        <Navigation/>
        <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/home" component={Home}></Route>
            <Route exact path="/Home" component={Home}></Route>
            <Route exact path="/about" component={About}></Route>
            <Route exact path="/services" component={Services}></Route>
            <Route exact path="/experience" component={Experience}></Route>
            <Route exact path="/certificate" component={Experience}></Route>
            <Route exact path="/education" component={Experience}></Route>
            <Route exact path="/projects" component={Projects}></Route>
            <Route exact path="/contact" component={Contact}></Route>
        </Switch>
        </>

  )
}

export default Routing