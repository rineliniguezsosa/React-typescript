import React from 'react';

export const Button = () => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>):void =>{
    console.log(event) //Event Props
  }
  return (
    <div>
        <button onClick={handleClick}>Click me!</button>
    </div>
  )
}
