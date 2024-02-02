// use state is used to update the state of the component
// react take care of updating value in UI

import React, { useState } from 'react';

function ExampleComponent() {
  // Syntax: const [stateVariable, setStateFunction] = useState(initialValue);
  const [count, setCount] = useState(0);

  // Here count is variable which stores value of hook
  // setCount is callback function to update the value of the variable

  // Event handler to update the state
  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default ExampleComponent;
