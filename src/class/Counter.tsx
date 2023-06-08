import { Component } from 'react'

type Counterprops = {
    count:number
}
export class Counter extends Component {
    state = {
        count:0
    }

    increment =() =>{
        this.setState({count:this.state.count+1})
    }
  render() {
    return (
      <div>
        Counter
        <button onClick={this.increment}>Incrementar</button>
        {this.state.count}
      </div>
    )
  }
}

export default Counter