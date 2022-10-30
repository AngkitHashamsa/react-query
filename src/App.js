import { Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Home from "./pages/Home";
import ReactQuery from "./pages/ReactQuery";
import SingleDetails from "./pages/SingleData";
const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query" element={<ReactQuery />} />
        <Route path="/single/:id" element={<SingleDetails />} />
      </Routes>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
