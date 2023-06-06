import React from 'react';

type Buttonprops = {
    handleClick:(event: React.MouseEvent<HTMLBodyElement>) =>void //Event props
}

export const Button = (props:Buttonprops) => {
  return (
    <div>Button</div>
  )
}
