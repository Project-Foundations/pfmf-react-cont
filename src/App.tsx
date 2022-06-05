import React from 'react';

// @ts-ignore
const ProductRuntime = React.lazy(() => import('products/Product'));

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <ProductRuntime />
    </div>
  );
}

export default App;
