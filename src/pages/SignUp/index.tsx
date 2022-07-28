import { routes } from "@app/App.routes"
import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { SignUpForm } from "./SignUpForm"
import { SignUpContainer } from "./style"

export function SignUp() {
  
  return (
    <SignUpContainer>
      <Typography variant="h1" component="h1" className="title">My Resume</Typography>

      <SignUpForm onSubmit={() => {}} />

      <p>Already have an account? <Link to={routes.signIn.path}>Sign In</Link></p>
    </SignUpContainer>
  )
}