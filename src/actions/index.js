import { 
    USER_EXIST,
    USER_SIGNOUT, 
    ADD_PRODUCT, 
    DELETE_PRODUCT, 
    EDIT_PRODUCT
} from "../constants";

export const userExist = () => {
    const {localStorage} = window;
    const user = localStorage.getItem('USER');
    return {
        type: USER_EXIST,
        user
    }
}

export const userSignOut = () => {
    const{localStorage} = window;
    const user = localStorage.removeItem('USER');
    return {
        type: USER_SIGNOUT,
        user
    }
}

export function addProduct(productDetails) {
    const action = {
        type: ADD_PRODUCT,
        productDetails
    }
    return action;
}

export function deleteProduct(product) {
    const action = {
        type: DELETE_PRODUCT,
        product
    }
    return action;
}

export function editProduct(edit_product, productDetails) {
    const action = {
        type: EDIT_PRODUCT,
        edit_product,
        productDetails
    }
    return action;
}