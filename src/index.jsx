import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, hashHistory} from 'react-router'
import App from './components/App'
import Voting from './components/Voting'
import Results from './components/Results'
import {createStore} from 'redux'
import reducer from './reducer'
import {Provider} from 'react-redux'

const store = createStore(reducer)
store.dispatch({
  type: 'SET_STATE',
  state: {
    vote: {
      pair: ['Sunshine', '28 Days Later'],
      tally: {Sunshine: 2}
    }
  }
})

const routes = <Route component={App}>
  <Route path="/results" component={Results} />
  <Route path="/" component={Voting} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>,
  </Provider>,
  document.getElementById('app')
)
