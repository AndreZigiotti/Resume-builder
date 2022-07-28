import { routes } from "@app/App.routes";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { SignInForm } from "./SingInForm";
import { SignInContainer } from "./style";

export function SignIn() {
  return (
    <SignInContainer>
      <Typography variant="h1" component="h1" className="title">My Resume</Typography>

      <SignInForm onSubmit={() => {}} />

      <p>Don't have an account yet? <Link to={routes.signUp.path}>Sign Up</Link></p>
    </SignInContainer>
  )
}