import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Ecommerce PLP</h1>
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Buy now</Button>
      </div>
    </>
  );
}

export default App;
