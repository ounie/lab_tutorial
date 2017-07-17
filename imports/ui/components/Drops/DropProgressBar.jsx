import React, {Component} from 'react';

export default class DropProgressBar extends Component {

  render() {
    return (
      <ol className="progress2 progress--large">
        <li className="is-complete" data-step="1">
          Create Account
        </li>
        <li className="is-complete" data-step="2" style={{width: '20%'}}>
          Login
        </li>
        <li className="is-active" data-step="3">
          Payment
        </li>
        <li data-step="4" className="progress__last">
          Confirm
        </li>
      </ol>
    )
  }
}
