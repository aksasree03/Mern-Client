import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const root = document.getElementById('root');
const virtualRoot = ReactDOM.createRoot(root);

function Component() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = You clicked ${count} times;
  }, [count]);

  return (
    <div>
      <h1>You clicked on this: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

virtualRoot.render(<Component />);