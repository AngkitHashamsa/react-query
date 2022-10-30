import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ReactQuery from "./pages/ReactQuery";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/query" element={<ReactQuery />} />
    </Routes>
  );
}

export default App;
