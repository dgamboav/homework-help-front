import { types } from "../../types/types";


export const authReducer = ( state = {}, action ) => {
    switch (action.type) {
        case types.login:
            return {
                id: action.payload.id,
                username: action.payload.username,
                email: action.payload.email,
                roles: action.payload.roles
            };
    
        case types.logout:
            return { };

        default:
            return state;
    }
}