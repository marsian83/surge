import { ErrorBoundary, Route, Router as PreactRouter } from "preact-iso";

import Layout from "./Layout.tsx";
import { useLocation } from "preact-iso";

import _404 from "./pages/_404.tsx";

export default function Router() {
  return (
    <Layout>
      <ErrorBoundary onError={(e) => console.error(e)}>
        <PreactRouter>
          <Route path="" component={FallbackRoute} />

          <Route default component={_404} />
        </PreactRouter>
      </ErrorBoundary>
    </Layout>
  );
}

function FallbackRoute() {
  const location = useLocation();

  location.route("/home");

  return <></>;
}
