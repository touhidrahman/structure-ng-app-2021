import { User } from '@features/users/interfaces/user'

export interface LoginResponse {
    jwt: string
    user: User
}
