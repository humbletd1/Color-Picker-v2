# Color Picker Application

## Introduction

This application allows users to select, add, and remove colors. Custom colors are persisted across page reloads using local storage.

## Components

### ColorOption

Displays a single color option with a remove button.

### ColorList

Displays a list of `ColorOption` components.

### AddColor

Contains an input field and a button to add a new color.

### PersistedColorList

Handles loading and saving colors from/to local storage and renders the `ColorList` and `AddColor` components.

### App

The main component of the application that maintains the selected background color and renders the `PersistedColorList` component.

## Running the Application

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. Navigate into the project directory:
    ```sh
    cd color-picker-app
    ```

3. Install dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Additional Information

Ensure that user inputs for custom colors are validated to be correct hex codes.


## DETAILED EXPLANATION OF LOCAL STORAGE AND HOW IT WAS IMPLEMENTED.

Local storage is a web storage API provided by modern browsers that allows you to store data locally on the user's device. This data persists even after the browser is closed and reopened. Local storage is useful for saving user preferences, application state, and other information that needs to be retained across sessions.

### Local Storage Basics

- **Capacity**: Each domain can store up to 5MB of data in local storage.
- **Key-Value Store**: Data is stored as key-value pairs, where both the key and the value must be strings.
- **Persistence**: Data persists across browser sessions until it is explicitly deleted by the web application or the user.

### Functions in Local Storage

- **setItem(key, value)**: Adds a key-value pair to local storage. If the key already exists, the value is updated.
- **getItem(key)**: Retrieves the value associated with the given key.
- **removeItem(key)**: Removes the key and its associated value.
- **clear()**: Clears all key-value pairs in local storage.
- **length**: Returns the number of key-value pairs in local storage.
- **key(index)**: Returns the key at the specified index.

### Using Local Storage in the Color Picker Application

In the Color Picker application, local storage is used to persist the list of custom colors across sessions. Here's a detailed explanation of how it's implemented:

#### Step-by-Step Explanation

1. **Initialize State from Local Storage**:
   - When the component mounts, it checks if there are any colors saved in local storage. If so, it uses those colors to initialize the state. If not, it initializes the state with default colors.

2. **Save State to Local Storage**:
   - Whenever the state of the colors array changes, the new state is saved to local storage. This ensures that any additions or removals of colors are persisted across page reloads.

#### Code Implementation

**PersistedColorList Component**:

```jsx
import React, { useEffect, useState } from 'react';
import ColorList from './ColorList';
import AddColor from './AddColor';

const PersistedColorList = ({ onSelect }) => {
  // Default colors to be displayed if no colors are found in local storage
  const defaultColors = ['#FF0000', '#00FF00', '#0000FF']; 

  // Initialize the state with colors from local storage or default colors
  const [colors, setColors] = useState(() => {
    const storedColors = localStorage.getItem('colors');
    return storedColors ? JSON.parse(storedColors) : defaultColors;
  });

  // Save the colors to local storage whenever the colors state changes
  useEffect(() => {
    localStorage.setItem('colors', JSON.stringify(colors));
  }, [colors]);

  // Function to add a new color to the state
  const handleAddColor = (color) => {
    setColors([...colors, color]);
  };

  // Function to remove a color from the state
  const handleRemoveColor = (color) => {
    setColors(colors.filter((c) => c !== color));
  };

  return (
    <div>
      <ColorList colors={colors} onSelect={onSelect} onRemove={handleRemoveColor} />
      <AddColor onAdd={handleAddColor} />
    </div>
  );
};

export default PersistedColorList;
```

### Detailed Explanation of Each Step

1. **Initialization**:
   ```jsx
   const [colors, setColors] = useState(() => {
     const storedColors = localStorage.getItem('colors');
     return storedColors ? JSON.parse(storedColors) : defaultColors;
   });
   ```
   - `useState` is used to initialize the `colors` state.
   - A function is passed to `useState` that attempts to retrieve the `colors` from local storage using `localStorage.getItem('colors')`.
   - If `colors` are found in local storage, they are parsed from a JSON string to a JavaScript array using `JSON.parse`.
   - If no colors are found in local storage, `defaultColors` are used to initialize the state.

2. **Persisting Changes to Local Storage**:
   ```jsx
   useEffect(() => {
     localStorage.setItem('colors', JSON.stringify(colors));
   }, [colors]);
   ```
   - `useEffect` is used to perform a side effect whenever the `colors` state changes.
   - The effect saves the current `colors` state to local storage using `localStorage.setItem('colors', JSON.stringify(colors))`.
   - The `JSON.stringify` function is used to convert the `colors` array into a JSON string, which can be stored in local storage.

3. **Adding a New Color**:
   ```jsx
   const handleAddColor = (color) => {
     setColors([...colors, color]);
   };
   ```
   - `handleAddColor` is a function that updates the `colors` state by adding a new color to the array.
   - `setColors([...colors, color])` creates a new array that includes all existing colors and the new color.

4. **Removing a Color**:
   ```jsx
   const handleRemoveColor = (color) => {
     setColors(colors.filter((c) => c !== color));
   };
   ```
   - `handleRemoveColor` is a function that updates the `colors` state by removing the specified color from the array.
   - `setColors(colors.filter((c) => c !== color))` creates a new array that includes all colors except the one to be removed.

### Benefits of Using Local Storage

- **Persistence**: Data remains available across page reloads and browser sessions.
- **Simplicity**: The API is straightforward and easy to use.
- **Performance**: Accessing local storage is fast and synchronous.

### Limitations of Local Storage

- **Size Limit**: Limited to about 5MB per domain, which may not be sufficient for large amounts of data.
- **Security**: Data is stored as plain text and is accessible by any script running on the same domain, making it vulnerable to XSS attacks.

### When to Use Local Storage

- **User Preferences**: Save user settings and preferences (e.g., theme color, language).
- **Form Data**: Temporarily store form data to prevent data loss.
- **Application State**: Persist parts of the application state that should be retained across sessions.

By following this detailed explanation and implementation, you can effectively use local storage to persist data in your React applications, ensuring a better user experience and data retention across sessions.

