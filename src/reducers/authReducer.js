import { types } from "../types/types";

const initialState = {
    user: null,
    isAuth: false
}

export const authReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.login:
            return {
                user: {
                    id: action.payload.id,
                    username: action.payload.username,
                    email: action.payload.email,
                    roles: action.payload.roles
                },
                isAuth: true
            };
    
        case types.logout:
            return { };

        default:
            return state;
    }
}