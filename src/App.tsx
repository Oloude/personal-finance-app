import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Pots from "./pages/Pots";
import Budgets from "./pages/Budgets";
import Bills from "./pages/Bills";
import AppLayout from "./components/Layout/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/pots" element={<Pots />} />
          <Route path="/budgets" element={<Budgets />} />
          <Route path="bills/" element={<Bills />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
