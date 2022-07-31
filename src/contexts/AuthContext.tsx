import { routes } from "@app/App.routes";
import { auth } from "@app/firebase-config";
import { AuthErrorCodes, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, User, UserCredential } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type AuthProviderProps = {
  children: ReactNode
}

type LoginPayload = {
  email: string
  password: string
}

type RegisterPayload = {
  name: string
  email: string
  password: string
}

interface IAuthContext {
  user: User | null
  loading: boolean
  error: string | null
  signUp: (payload: RegisterPayload) => Promise<void>
  loginWithEmail: (payload: LoginPayload) => Promise<UserCredential>
  logout: () => void
  clearError: () => void
}

const ERROR_MESSAGES: { [key: string]: string } = {
  [AuthErrorCodes.WEAK_PASSWORD]: 'A senha informada é muito fraca. As senhas devem ter pelo menos 6 caracteres.',
  [AuthErrorCodes.EMAIL_EXISTS]: 'O e-mail informado já está em uso.',
  [AuthErrorCodes.INVALID_PASSWORD]: 'As credenciais fornecidas estão incorretas.',
  [AuthErrorCodes.USER_DELETED]: 'O usuário informado não foi encontrado.',
  'default': 'Não foi possível realizar o cadastro. Por favor, tente novamente mais tarde.',
  'default-login': 'Não foi possível realizar a autenticação. Por favor, tente novamente mais tarde.'
}

export const AuthContext = createContext({} as IAuthContext)

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [user, setUser] = useState<User | null>(null)

  async function loginWithEmail({ email, password }: LoginPayload) {
    setLoading(true)

    return signInWithEmailAndPassword(auth, email, password)
      .then(user => {
        setUser(user.user)
        navigate(routes.home.path)
        return user
      })
      .catch(error => {
        setError(ERROR_MESSAGES[error.code || 'default-login'])
        return error
      })
  }

  async function signUp({email, name, password}: RegisterPayload) {
    const res = await createUserWithEmailAndPassword(auth, email, password)
    return updateProfile(res.user, { displayName: name })
  }

  function logout() {
    return signOut(auth)
  }

  function clearError() {
    setError(null)
  }

  useEffect(() => {    
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider value={{
      loginWithEmail,
      loading,
      clearError,
      logout,
      signUp,
      user,
      error
    }}>
      {children}
    </AuthContext.Provider>
  )
}