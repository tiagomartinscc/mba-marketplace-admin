import { api } from '../lib/axios'

export interface SignUpBody {
  name: string
  phone: string
  email: string
  password: string
  passwordConfirmation: string
  avatarId: string | null
}

export async function signUp({
  name,
  phone,
  email,
  password,
  passwordConfirmation,
  avatarId,
}: SignUpBody) {
  await api.post('/sellers', {
    name,
    phone,
    email,
    password,
    passwordConfirmation,
    avatarId,
  })
}
