import { AlternateEmail, Lock } from "@mui/icons-material"
import { Button, InputAdornment, TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { SignInFormContainer } from "./style"

type FormData = {
  email: string
  password: string
}

type Props = {
  onSubmit: (data: FormData) => void
}

export function SignInForm({ onSubmit }: Props) {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  function handleOnSubmit(data: FormData) {
    console.log(data)
    onSubmit(data)
  }

  return (
    <SignInFormContainer className="d-flex flex-column" onSubmit={handleSubmit(handleOnSubmit)}>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <TextField
            label="E-mail"
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
        render={({ field }) => (
          <TextField
            label="Password"
            type="password"
            InputProps={{
              endAdornment: <InputAdornment position="end"><Lock /></InputAdornment>
            }}
            {...field}
          />
        )}
      />

      <Button type="submit">Sign in</Button>
    </SignInFormContainer>
  )
}