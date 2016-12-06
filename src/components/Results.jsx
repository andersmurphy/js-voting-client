import React from 'react'
import Winner from './Winner'
import Tally from './Tally'
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'

export class Results extends React.PureComponent {
  render() {
    return this.props.winner ?
    <Winner ref="winner" winner={this.props.winner} /> :
    <div className="results">
      <Tally {...this.props} />
        <div className="management">
          <button ref="next"
                  className="next"
                  onClick={this.props.next}>
                  Next
          </button>
      </div>
    </div>

  }
}

function mapStateToProps(state) {
  return {
    pair: state.getIn(['vote', 'pair']),
    tally: state.getIn(['vote', 'tally']),
    winner: state.get('winner')
  }
}

export const ResultsContainer = connect(
  mapStateToProps,
  actionCreators
)(Results)
