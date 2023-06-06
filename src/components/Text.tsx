import React from 'react';

type Textprops = {
    styles:React.CSSProperties //style props
}

export const Text = (props:Textprops) => {
  return (
    <div>
        <span style={props.styles}>Rinel iñiguez sosa</span>
    </div>
  )
}
