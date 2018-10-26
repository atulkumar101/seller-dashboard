import { SIGN_IN, USER_EXIST, USER_SIGNOUT } from '../constants';

let user = null;

export default (state = user, action) => {
    switch(action.type){
        case USER_EXIST:
            return {
                ...state,
                user: action.user
            }
        case USER_SIGNOUT:
            return {
                ...state,
                user: action.user
            }
        default:
            return state;
    }
}