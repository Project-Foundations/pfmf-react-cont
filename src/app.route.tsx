import { FC, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "layout";
import { MFRemote } from "core";

import { HomePage } from "./home";
import { AppNav } from "./shared";
import { useQueryOptions } from "./options";

export const AppRoute: FC = (): JSX.Element => {
  const { options } = useQueryOptions();

  return (
    <BrowserRouter>
      <Layout appNav={<AppNav options={options} />}>
        <Suspense fallback={<div>Loading..</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* Add here routes */}
            {options &&
              options.map((option) => (
                <Route
                  key={option.id}
                  path={option.path}
                  element={
                    <MFRemote
                      microFrontend={{
                        url: option.url,
                        scope: option.scope,
                        module: option.module,
                      }}
                    />
                  }
                />
              ))}
          </Routes>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
};
