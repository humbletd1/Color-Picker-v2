// This component displays a single color option as a clickable square. It receives the color value and a function to handle the click event as props.

import React from 'react';

const ColorOption = ({ color, onSelect, onRemove }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection:'column',
        alignItems: 'center',
        margin: '5px'
      }}>
      <div
        onClick={() => onSelect(color)}
        style={{
          backgroundColor: color,
          width: '60px',
          height: '60px',
          display: 'inline-block',
          cursor: 'pointer',
          margin: '5px',
          border:'1px solid black',
          borderRadius: '5px',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      />
      <button onClick={() => onRemove(color)}
        style={{ marginLeft: '0px'}}
      >
        Remove
      </button>
    </div>

  );
};

export default ColorOption;
