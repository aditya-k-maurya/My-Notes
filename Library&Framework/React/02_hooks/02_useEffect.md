**useEffect Hook**
It is used to perform side effect in functional compononent.Side effects can include data fetching, subscriptions, or manually changing the DOM.

Use effect has two parameter,first is function that perfom operation like fetch, and second is dependency [] which changes triggers useEffect

```jsx
useEffect(() => {
  //this is the function
}, [dependency]);
```

**adding event linstner example**

```jsx
import React, { useEffect } from "react";

function ClickCounter() {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  // useEffect for adding and removing event listeners
  useEffect(() => {
    document.addEventListener("click", handleClick);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []); // Empty dependency array means the effect runs once after the initial render

  return <button>Click me</button>;
}

export default ClickCounter;
```

**fetching API Example**

```jsx
import React, { useState, useEffect } from "react";

function DataFetchingExample() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.example.com/data");
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means the effect runs once after the initial render

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && (
        <div>
          <h2>Data:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default DataFetchingExample;
```
