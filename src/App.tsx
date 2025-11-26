import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Button } from "./components/ui/button";
import "./App.css";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <h1 className="text-3xl font-bold underline">Ecommerce PLP</h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Buy now</Button>
      </div>
    </QueryClientProvider>
  );
}

export default App;
