import { Typography, useTheme } from "@mui/material";

type Props = {
  className?: string
}

export function Brand({ className }: Props) {
  const { palette } = useTheme()

  return (
    <Typography
      variant="h5"
      component="h1"
      className={className}
      sx={{
        color: palette.primary.light,
        textTransform: 'uppercase',
        'strong': {
          color: palette.primary.main,
          textShadow: 'none',
          textTransform: 'none',
        }
      }}
    >
      <strong>my</strong>Resume
    </Typography>
  )
}