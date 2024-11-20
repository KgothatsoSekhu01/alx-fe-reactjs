import React, { useState } from 'react'; // Import useState hook

function Counter() {
  const [count, setCount] = useState(0);  // Initialize state with count starting at 0

  return (
    <div>
      <p>Current Count: {count}</p> {/* Display the current count */}
      
      {/* Button for incrementing the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button> 
      
      {/* Button for decrementing the count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button> 
      
      {/* Button for resetting the count to 0 */}
      <button onClick={() => setCount(0)}>Reset</button> 
    </div>
  );
}

export default Counter;
