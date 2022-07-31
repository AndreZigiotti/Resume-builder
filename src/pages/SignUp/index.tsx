import { routes } from "@app/App.routes"
import { Brand } from "@app/components"
import { useAuth } from "@app/hooks/useAuth"
import { Typography } from "@mui/material"
import { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { SignUpForm } from "./SignUpForm"
import { SignUpContainer } from "./style"

export function SignUp() {
  const { user } = useAuth()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(user) {
      navigate(routes.home.path)
    }
  }, [user])

  return (
    <SignUpContainer className="d-flex flex-column">
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

        <SignUpForm />

        <Typography
          component="p"
          textAlign="center"
          color="grey.600"
        >
          Já possui uma conta? <Link className="cta" to={routes.signIn.path}>Entre aqui</Link>
        </Typography>
      </div>
    </SignUpContainer>
  )
}