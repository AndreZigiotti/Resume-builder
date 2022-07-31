import { routes } from "@app/App.routes";
import { Brand } from "@app/components";
import { useAuth } from "@app/hooks/useAuth";
import { Typography } from "@mui/material";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInForm } from "./SingInForm";
import { SignInContainer } from "./style";

export function SignIn() {
  const { user } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if(user) {
      navigate(routes.home.path)
    }
  }, [user])

  return (
    <SignInContainer className="d-flex flex-column">
      <header>
        <Brand />
      </header>

      <div className="wrapper d-flex flex-column justify-center">
        <Typography
          className="title"
          variant="h4"
          component="h2"
        >
          Bem-vindo!
        </Typography>

        <SignInForm />

        <Typography
          component="p"
          textAlign="center"
          color="grey.600"
        >
          Ainda não possui uma conta? <Link className="cta" to={routes.signUp.path}>Registre-se</Link>
        </Typography>
      </div>
    </SignInContainer>
  )
}