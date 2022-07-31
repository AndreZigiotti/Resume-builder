import { Route, Routes } from "react-router-dom";
import { Dashboard } from "@app/layout";
import { SignUp } from "@app/pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { ProtectedRoute } from "./components/ProtectedRoute";

export const routes = {
  signIn: {
    path: '/sign-in',
    element: <SignIn />
  },
  signUp: {
    path: '/sign-up',
    element: <SignUp />
  },
  home: {
    path: '/',
    element: <Dashboard />
  }
}

export function AppRoutes() {
  return (
    <Routes>
      <Route path={routes.signUp.path} element={routes.signUp.element} />
      <Route path={routes.signIn.path} element={routes.signIn.element} />
      <Route
        path={routes.home.path}
        element={
          <ProtectedRoute>
            {routes.home.element}
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}