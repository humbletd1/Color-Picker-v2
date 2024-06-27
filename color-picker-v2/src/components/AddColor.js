import { useState } from "react";
import React from 'react';


const AddColor = ({ onAdd }) => {

    const [color, setColor] = useState('');

    const handleAddColor = () => {
        if (/^#[0-9A-F]{6}$/i.test(color)) {
            onAdd(color);
            setColor('');

        } else {
            alert('invalide color code!, please input a valid hex color code.')
        }
    }

    return (
        <div style={{ margin: '10px 0', 
            display:'flex', alignItems:'center',
            flexWrap:'wrap', marginLeft: '10px',
        }}>
            <input
                type='text'
                value={color}
                onChange={(e) => setColor(e.target.value)} placeholder='#ffff' />
            <button onClick={handleAddColor} >Add New Color</button>
        </div>
    )
}

export default AddColor
