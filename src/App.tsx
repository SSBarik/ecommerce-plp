import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { ErrorBoundary } from "react-error-boundary";
import { queryClient } from "./lib/queryClient";
import "./App.css";
import ProductListingPage from "./app/ProductListingPage";
import ProductListingPageFallback from "./components/fallbacks/ProductListingPageFallback";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary
        fallbackRender={({ error }) => (
          <ProductListingPageFallback error={error} />
        )}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductListingPage />} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
