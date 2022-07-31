import { useAuth } from "@app/hooks/useAuth"
import { AlternateEmail, Lock, Person } from "@mui/icons-material"
import { Button, InputAdornment, TextField, Typography } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { SignUpFormContainer } from "./style"

type FormData = {
  name: string,
  email: string
  password: string,
  passwordConfirmation: string
}

export function SignUpForm() {
  const { loading, error, signUp } = useAuth()
  const { control, handleSubmit, setError } = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: ''
    }
  })

  function handleOnSubmit({ email, password, passwordConfirmation, name }: FormData) {
    if(loading) return;

    if(password !== passwordConfirmation) {
      setError('passwordConfirmation', {
        message: 'As senhas informadas não conferem.'
      })
      return
    }

    signUp({ email, name, password })
  }

  return (
    <SignUpFormContainer className="d-flex flex-column" onSubmit={handleSubmit(handleOnSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Este campo é obrigatório.'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="Nome completo"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            InputProps={{
              endAdornment: <InputAdornment position="end"><Person /></InputAdornment>
            }}
            {...field}
          />
        )}
      />
      <Controller
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Este campo é obrigatório.'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="E-mail"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            InputProps={{
              endAdornment: <InputAdornment position="end"><AlternateEmail /></InputAdornment>
            }}
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
            message: 'Este campo é obrigatório.'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="Senha"
            type="password"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            InputProps={{
              endAdornment: <InputAdornment position="end"><Lock /></InputAdornment>
            }}
            {...field}
          />
        )}
      />

      <Controller
        name="passwordConfirmation"
        control={control}
        rules={{
          required: {
            value: true,
            message: 'Este campo é obrigatório.'
          }
        }}
        render={({ field, fieldState }) => (
          <TextField
            label="Confirme a senha"
            type="password"
            error={!!fieldState.error}
            helperText={fieldState.error?.message}
            InputProps={{
              endAdornment: <InputAdornment position="end"><Lock /></InputAdornment>
            }}
            {...field}
          />
        )}
      />

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

      <Button type="submit">Criar conta</Button>
    </SignUpFormContainer>
  )
}