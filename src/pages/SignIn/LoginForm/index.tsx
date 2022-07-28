import { FieldValues, useForm } from "react-hook-form"

type Props = {
  onSubmit: (data: any) => void
}

export function LoginForm({ onSubmit }: Props) {
  const { register, handleSubmit } = useForm()

  function handleOnSubmit(data: FieldValues) {
    onSubmit(data)
  }

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <input
        {...register('e-mail')}
      />
    </form>
  )
}