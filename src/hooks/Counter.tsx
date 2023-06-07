import { useReducer } from "react"

const initialState = {
    count:0
}
export const Counter = () => {
  const [state, dispatch] = useReducer(countreducer,initialState)
  return (
    <div>Counter</div>
  )
}
