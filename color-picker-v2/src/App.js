import React, { useState } from 'react';
import './App.css';
import PersistedColorList from './components/PersistedColorList';
import ColorList from './components/ColorList';


const App = () => {

  const [backgroundColor, setBackgroundColor] = useState('#ffff');

  const handleSelectColor = (color) => {
    setBackgroundColor(color);
  };

  // const colors = ["blue",'black','red', 'green'];

  return (
    <div className='App'
      style={{ backgroundColor, minHeight: '100vh', padding: '20px' }}>
      <h1>Welcome to Color Picker App</h1>
      {/* <ColorList colors={colors} onSelect={handleSelectColor} /> */}
      <PersistedColorList
        onSelect={handleSelectColor} />
    </div>
  );
}

export default App;
