import React, { useState, useEffect } from 'react';
import ColorList from './ColorList';
import AddColor from './AddColor';


const PersistedColorList = ({ onSelect }) => {

    const [colors, setColors] = useState(["blue",'black','red', 'green']);

    useEffect(() => {
        const storedColors = localStorage.getItem('colors');
        if (storedColors) {

            setColors(JSON.parse(storedColors));
        }

    }, []);

    useEffect(() => {
        localStorage.setItem('colors', JSON.stringify(colors));
    }, [colors]);

    const handleAddColor = (color) => {
        setColors([...colors, color]);
    };

    const handleRemoveColor = (color) => {
        setColors(colors.filter((c) => c !== color))
    };



    return (
        <div>

            <ColorList colors={colors}
                onSelect={onSelect}
                onRemove={handleRemoveColor} />
            <AddColor onAdd={handleAddColor} />

        </div>
    );
};

export default PersistedColorList;
