import React from "react";
import { Routes, Route } from "react-router-dom";

import { MFRemote } from 'core';

// Load micro frontend
// @ts-ignore
//const ProductRuntime = React.lazy(() => import("mfProducts/Product"));
//const ProductsRouteRuntime = React.lazy(() => import("mfProducts/ProductsRoute"));

/*const renderMFE = (MFE: any) => (
  <React.Suspense fallback="Loading...">
    <MFE />
  </React.Suspense>
);*/

export const Main = () => {
  return (
    <main>
      <MFRemote microFrontend={{
        url: "//localhost:3001/remoteEntry.js",
        scope: "mfProducts",
        module: "./Product"
      }} />
      { /* 
        <Routes>
        <Route path="/" element={renderMFE(ProductRuntime)} />
      </Routes>
      */}
    </main>
  );
};
