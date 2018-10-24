import { SIGN_IN, USER_EXIST } from '../constants';

let user = {
    email: "a@a.com",
    password: "null"
}

export default (state = user, action) => {
    switch(action.type){
        case SIGN_IN:
            const { email, password } = action;
            user = {
                email,
                password
            }
            return user;
        case USER_EXIST:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}