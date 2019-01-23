import React from 'react'
import { HashRouter as Router,Switch,Route,Redirect } from 'react-router-dom'
import App from './App'
import Home from './pages/home'
import Location from './pages/location'
import About from './pages/about'
import Production from './pages/production'
import NoMatch from './pages/noMatch'
import Family from './pages/Family'

class IRouter extends React.Component {
  render() {
    return(
      <Router>
        <App>
          <Route path='/' render={() => 
            <Home>
              <Switch>
                <Route path='/family' component={Family} />
                <Route path='/home/location' component={Location} />
                <Route path='/home/about' component={About} />
                <Route path='/home/production' component={Production} />
                <Redirect to="/family" />
              </Switch>
            </Home>
          }></Route>
        </App>
      </Router>
    )
  }
}

export default IRouter