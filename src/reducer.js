import {List, Map} from 'immutable'

const setState = (state, action) => state.merge(action.state)

const vote = (state, action) => {
  const currentPair = state.getIn(['vote', 'pair'])
  if (currentPair && currentPair.includes(action.entry)) {
    return state.set('hasVoted', action.entry)
  } else {
    return state
  }
}

const resetVote = (state) => {
  const hasVoted = state.get('hasVoted')
  const currentPair = state.getIn(['vote', 'pair'], List())
  if (hasVoted && !currentPair.includes(hasVoted)) {
    return state.remove('hasVoted')
  } else {
    return state
  }
}

const actions = Map({
  'SET_STATE': (state, action) => resetVote(setState(state, action)),
  'VOTE': vote
})

export default (state = Map(), action) => {
  return actions.get(action.type, () => state)(state, action)
}
