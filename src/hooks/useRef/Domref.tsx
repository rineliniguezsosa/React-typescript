import { useRef,useEffect } from "react"


export const Domref = () => {
    const domref = useRef<HTMLInputElement>(null!)//operador de aserción no nulo

    useEffect(() => {
      domref.current.focus()
    }, [])
  return (
    <div>
        <input type="text" ref={domref} />
    </div>
  )
}
