import { Role } from '@core/interfaces/role'

export interface User {
    id: string
    blocked: boolean
    confirmed: boolean
    email: string
    name: string
    provider: string
    role: Role
    username: string
    createdAt: Date
    updatedAt: Date
}
