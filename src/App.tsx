import React from "react";
import { BrowserRouter } from "react-router-dom";

import { Main } from './Main';

function App() {
  return (
    <BrowserRouter>
      <h1>App</h1>
      <Main />
    </BrowserRouter>
  );
}

export default App;
