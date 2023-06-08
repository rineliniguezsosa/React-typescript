import { useRef,useEffect } from "react"


export const Domref = () => {
    const domref = useRef(null)
  return (
    <div>
        <input type="text" ref={domref} />
    </div>
  )
}
