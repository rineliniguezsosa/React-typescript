import React from 'react';

type Buttonprops = {
    handleClick:(event: React.MouseEvent<HTMLBodyElement>) =>void //Event props
}

export const Button = (props:Buttonprops) => {
  return (
    <div>
        <button onClick={event => props.handleClick}>Click me!</button>
    </div>
  )
}
