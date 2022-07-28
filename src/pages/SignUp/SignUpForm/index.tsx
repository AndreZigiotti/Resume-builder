import { AlternateEmail, Lock, Person } from "@mui/icons-material"
import { Button, InputAdornment, TextField } from "@mui/material"
import { Controller, useForm } from "react-hook-form"
import { SignUpFormContainer } from "./style"

type FormData = {
  fullName: string,
  email: string
  password: string
}

type Props = {
  onSubmit: (data: FormData) => void
}

export function SignUpForm({ onSubmit }: Props) {
  const { control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      fullName: '',
      email: '',
      password: ''
    }
  })

  function handleOnSubmit(data: FormData) {
    console.log(data)
    onSubmit(data)
  }

  return (
    <SignUpFormContainer className="d-flex flex-column" onSubmit={handleSubmit(handleOnSubmit)}>
      <Controller
        name="fullName"
        control={control}
        render={({ field }) => (
          <TextField
            label="Full Name"
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

      <Button type="submit">Create account</Button>
    </SignUpFormContainer>
  )
}