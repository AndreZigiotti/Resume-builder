import { Route, Routes } from "react-router-dom";
import { Dashboard } from "@app/layout";
import { SignUp } from "@app/pages/SignUp";
import { SignIn } from "./pages/SignIn";

export const routes = {
  signIn: {
    path: '/sign-in',
    element: <SignIn />
  },
  signUp: {
    path: '/sign-up',
    element: <SignUp />
  }
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.signUp.path} element={routes.signUp.element} />
      <Route path={routes.signIn.path} element={routes.signIn.element} />
      <Route path="/" element={<Dashboard />}></Route>
    </Routes>
  )
}