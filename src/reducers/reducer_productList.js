import {ADD_PRODUCT, DELETE_PRODUCT, EDIT_PRODUCT} from '../constants';

let products = [
    {
        productname: "android 1", 
        productprice: "10000", 
        productdescription:"some description 1"
    },
];

export default (state = products, action) => {
    switch(action.type){
        case ADD_PRODUCT:
            const {productDetails} = action;
            const {productName, productPrice, productDescription} = productDetails
            products.push(
                {
                    productname: productName, 
                    productprice: productPrice, 
                    productdescription: productDescription
                }
            )
            return [...products];
        case DELETE_PRODUCT:
            const {product} = action;
            products.splice(
                products.indexOf(product), 1
            )
            return [...products];
        case EDIT_PRODUCT:
            const {edit_product} = action;
            const edit_productDetails = action.productDetails;
            products.splice(
                products.indexOf(edit_product),
                1, 
                {
                    productname: edit_productDetails.productName, 
                    productprice: edit_productDetails.productPrice, 
                    productdescription: edit_productDetails.productDescription
                }
            )
            return [...products];
        default:
            return state;
    }
}