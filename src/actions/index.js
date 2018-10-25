import { 
    SIGN_IN, 
    USER_EXIST, 
    ADD_PRODUCT, 
    DELETE_PRODUCT, 
    EDIT_PRODUCT
} from "../constants";

export function logUser(email){
    const action = {
        type: SIGN_IN,
        email
    }
    return action;
}

export const userExist = () => {
    const {localStorage} = window;
    const user = localStorage.getItem('USER');
    return {
        type: USER_EXIST,
        user
    }
}

export function addProduct(name, price, description) {
    const action = {
        type: ADD_PRODUCT,
        name,
        price,
        description
    }
    return action;
}

export function deleteProduct(product) {
    const action = {
        type: DELETE_PRODUCT,
        // productList,
        product
    }
    return action;
}

export function editProduct(edit_product, edit_name, edit_price, edit_description) {
    const action = {
        type: EDIT_PRODUCT,
        edit_product,
        edit_name, 
        edit_price, 
        edit_description
    }
    return action;
}