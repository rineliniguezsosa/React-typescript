import { useReducer } from "react"
import { Countereducer } from './Countereducer';

const initialState = {
    count:0
}
export const Counter = () => {
  const [state, dispatch] = useReducer(Countereducer,initialState)
  return (
    <div>
      <span>Cuenta:{state.count}</span>
    </div>
  )
}
