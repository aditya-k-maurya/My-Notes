//useRef hook

// Does not cause re-render after updation.
// can be used to access dom elements directly

import React, { useRef, useEffect } from 'react';

function ExampleComponent() {
  // Creating a ref object
  const myRef = useRef(null);

  // useEffect to focus on the input element when the component mounts
  useEffect(() => {
    myRef.current.focus();
  }, []);

  return (
    <div>
      {/* Using the ref in the input element */}
      <input type="text" ref={myRef} />
    </div>
  );
}



//we can hold mutable values without triggering rerenders

const count = useRef(0);

const increment = () => {
  count.current += 1;
  console.log(count.current); // Access the mutable value
};