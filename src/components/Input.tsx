import React from 'react';


export const Input = () => {
    const handlechange = (event:React.ChangeEvent<HTMLInputElement>):void =>{
        console.log(event.target.value)
    }
  return (
    <div>
        <input type="text" onChange={handlechange}></input>
    </div>
  )
}
