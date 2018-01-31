import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import FloofShowContainer from './containers/FloofShowContainer'
import FloofIndexContainer from './containers/FloofIndexContainer'
import NewFloofContainer from './containers/NewFloofContainer'
import ReviewFormTile from './components/ReviewFormTile'


const App = (props) => {

return(
  <Router history={browserHistory}>
    <Route path='/' component={FloofIndexContainer} />
    <Route path='/floofs' component={FloofIndexContainer} />
    <Route path='/floofs/new' component={NewFloofContainer} />
    <Route path='/floofs/:id' component={FloofShowContainer} />
  </Router>
)}

export default App;
