import React from 'react'
import Winner from './Winner'
import Tally from './Tally'

export default class Result extends React.PureComponent {
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
