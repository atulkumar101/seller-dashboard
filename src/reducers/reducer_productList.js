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
            const {name, price, description} = action;
            // const added_product =   {
            //      productname: name,
            //      productprice: price,
            //      productdescription: description
            //     }
            products.push(
                {
                    productname: name, 
                    productprice: price, 
                    productdescription: description
                }
            )
            // return [...products,added_product];
            return [...products];
        case DELETE_PRODUCT:
            const {product} = action;
            products.splice(
                products.indexOf(product), 1
            )
            return [...products];
            // productList.splice(
            //     productList.indexOf(product), 1
            // )
            // return productList;
        case EDIT_PRODUCT:
            const {edit_product, edit_name, edit_price, edit_description} = action;
            products.splice(
                products.indexOf(edit_product),
                1, 
                {
                    productname: edit_name, 
                    productprice: edit_price, 
                    productdescription: edit_description
                }
            )
            return [...products];
        default:
            return state;
    }
}