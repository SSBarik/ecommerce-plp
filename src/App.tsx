import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import "./App.css";
import ProductListingPage from "./app/ProductListingPage";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductListingPage></ProductListingPage>
    </QueryClientProvider>
  );
};

export default App;
