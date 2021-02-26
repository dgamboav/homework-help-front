import { types } from '../types/types'

export const login = (data) => ({
    type: types.login,
    payload: {
        id: data.id,
        username: data.username,
        email: data.email,
        roles: data.roles
    }
})