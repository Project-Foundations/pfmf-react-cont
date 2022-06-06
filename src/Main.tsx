import React from "react";
import { Routes, Route } from "react-router-dom";

// Load micro frontend
// @ts-ignore
//const ProductRuntime = React.lazy(() => import("mfProducts/Product"));
//const ProductsRouteRuntime = React.lazy(() => import("mfProducts/ProductsRoute"));

const renderMFE = (MFE: any) => (
  <React.Suspense fallback="Loading...">
    <MFE />
  </React.Suspense>
);

function loadComponent(scope: any, module: any) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    // @ts-ignore
    await __webpack_init_sharing__("default");
    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    // @ts-ignore
    await container.init(__webpack_share_scopes__.default);
    // @ts-ignore
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicScript = (args: any) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!args.url) {
      return;
    }

    const element = document.createElement("script");

    element.src = args.url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${args.url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${args.url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${args.url}`);
      document.head.removeChild(element);
    };
  }, [args.url]);

  return {
    ready,
    failed
  };
};

function System(props: any) {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url
  });

  if (!props.system) {
    return <h2>Not system specified</h2>;
  }

  if (!ready) {
    return <h2>Loading dynamic script: {props.system.url}</h2>;
  }

  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(props.system.scope, props.system.module)
  );

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
}

export const Main = () => {
  return (
    <main>
      <System system={{
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
