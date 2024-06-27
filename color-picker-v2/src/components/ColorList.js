 import React from 'react';
 import ColorOption from './ColorOption';

const ColorList = ({ colors,onSelect,onRemove }) => {
  return (
    <div style={{ display: 'flex',
      flexWrap:'wrap',
    }}>
      {colors.map( (color ,index) => (
        <ColorOption 
        key={index} 
        color={color} 
        onSelect={onSelect} 
        onRemove={onRemove}/>
    ))}
      
    </div>
  )
}

export default ColorList;
