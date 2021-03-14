import { types } from '../types/types';
import Axios from '../config/axiosConfig';

export const login = (data) => ({
    type: types.login,
    payload: {
        id: data.id,
        username: data.username,
        email: data.email,
        roles: data.roles
    }
})

// PETICIONES API
export const loginWithUsernamePassword = (username, password) => {
    return async (dispatch) => {     

        try {
            // const res = await Axios.post(`${Axios.defaults.baseURL}v1/auth/signin`, { username, password });

            const res = {
                data: {
                    id: 1,
                    username: "test",
                    email: "test@test.com",
                    roles: ["admin", "student"]
                }
            }

            setTimeout(() => {
                dispatch(login(res.data));
            }, 4000);
            
        } catch (error) {
            console.log(error);
        }




    }
}
