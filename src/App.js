import {Switch, Route, Redirect} from 'react-router-dom'
import './App.css'

import Home from './components/Home'
import TeamMatches from './components/TeamMatches'
import NotFoundPage from './components/NotFound'

const App = () => (
  <div className="div__container">
    <Switch>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={Home} />
      <Route exact path="/team-matches/:id" component={TeamMatches} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
)

export default App
