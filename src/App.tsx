import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { queryClient } from "./lib/queryClient";
import ProductListingPage from "./pages/ProductListingPage";
import ErrorBoundaryFallback from "./components/fallbacks/ErrorBoundaryFallback";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallbackRender={({ error }) => <ErrorBoundaryFallback error={error} />}
      >
        <BrowserRouter>
          <div className="mx-auto w-full max-w-screen-2xl">
            <Routes>
              <Route path="/" element={<ProductListingPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
