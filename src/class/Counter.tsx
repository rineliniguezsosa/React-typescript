import { Component } from 'react'

export class Counter extends Component {
    state = {
        count:0
    }
  render() {
    return (
      <div>
        Counter
        <button onClick={this.increment}>Incrementar</button>
      </div>
    )
  }
}

export default Counter