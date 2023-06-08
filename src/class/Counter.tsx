import { Component } from 'react'

type Counterprops = {
    count:number
}

type Countermessage = {
    message:string
}
export class Counter extends Component<Countermessage,Counterprops> {
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
        <p>{this.props.message}</p>
      </div>
    )
  }
}

export default Counter