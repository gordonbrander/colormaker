import React from 'react';

export const View = props => (
  <div className="swatch" style={props}></div>
)

export const List = ({model}) => {
  const items = model.map((color, i) => <View key={i} backgroundColor={color}/>)
  return (
    <div className="swatches">{items}</div>
  )
}