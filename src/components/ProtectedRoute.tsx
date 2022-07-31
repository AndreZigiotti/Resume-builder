import { routes } from "@app/App.routes";
import { useAuth } from "@app/hooks/useAuth";
import { ReactNode } from "react";
import { Navigate, useNavigate } from "react-router-dom";

type Props = {
  children: ReactNode
}

export function ProtectedRoute({ children }: Props) {
  const { user, loading } = useAuth()

  console.log(user)

  if(!user && !loading) {
    return <Navigate to={routes.signIn.path} />
  }

  return (
    <>
      {children}
    </>
  )
}