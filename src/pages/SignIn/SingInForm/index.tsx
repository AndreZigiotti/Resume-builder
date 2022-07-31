import { useAuth } from "@app/hooks/useAuth"
import { AlternateEmail, Lock } from "@mui/icons-material"
import { Button, InputAdornment, TextField, Typography } from "@mui/material"
import { useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { SignInFormContainer } from "./style"

type FormData = {
  email: string
  password: string
}

export function SignInForm() {
  const { loginWithEmail, clearError, loading, error } = useAuth()
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function handleOnSubmit({ email, password }: FormData) {
    if(loading) {
      return
    }
    
    await loginWithEmail({email, password})
  }

  useEffect(() => {
    return () => clearError()
  }, [])

  return (
    <SignInFormContainer className="d-flex flex-column" onSubmit={handleSubmit(handleOnSubmit)}>
      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Required field'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="E-mail"
            InputProps={{
              endAdornment: <InputAdornment position="end"><AlternateEmail /></InputAdornment>
            }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            {...field}
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Required field'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="Password"
            type="password"
            InputProps={{
              endAdornment: <InputAdornment position="end"><Lock /></InputAdornment>
            }}
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            {...field}
          />
        )}
      />

      <Link className="forgot-password" to="">Esqueceu sua senha?</Link>

      {!!error && (
        <Typography
          className="error-message"
          variant="body2"
          color="error"
          component="p"
        >
          {error}
        </Typography>
      )}

      <Button type="submit">Sign in</Button>
    </SignInFormContainer>
  )
}