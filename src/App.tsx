import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Home } from "./pages";
import { Dashboard } from "./pages/dashboard";

export default function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={"/:id"} element={<Dashboard />} />

      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}
