import { useRef,useEffect } from "react"


export const Domref = () => {
    const domref = useRef(null)

    useEffect(() => {
      domref.current.focus()
    }, [])
  return (
    <div>
        <input type="text" ref={domref} />
    </div>
  )
}
