import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./layout";
import { SignIn } from "./pages/SignIn";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<SignIn />} />
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  )
}