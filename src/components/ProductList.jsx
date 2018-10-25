import React, { Component } from 'react';
import EditProductModal from './EditProductModal';
import Button from '@material-ui/core/Button';
import down from './download.jpg';
import {connect} from 'react-redux';
import '../App.css';

import {deleteProduct} from '../actions';

class ProductList extends Component{

    constructor(props){
        super(props);
        this.state ={

        }
        // this.deleteProduct.bind(this);
    }

    deleteProduct = () => {
        const {addProduct, product} = this.props;
        console.log("this.props.product", this.props.product);
        this.props.deleteProduct(product);
        console.log("this.props.product", this.props.product);
        // // console.log("this.props.product", this.props.product);
        // // console.log("this.props.productlist", this.props.productlist);
        // const { product } = this.props;
        // // delete product in parent component
        // this.props.onDeleteProduct( product );
        // console.log("Updated Product List (this.props.productlist)", this.props.productlist);
    }

    editProduct = (product, productName, productPrice, productDescription) => {
        this.props.onEditProduct(product, productName, productPrice, productDescription);
    }

    render(){
        const {product} = this.props;
        console.log('Product List props(ProductList.jsx)', this.props);

        return(
            <div className="App Dib">
            <div className="ProductCard">
                {/* <h2>Product List</h2> */}
                <div>
                {/* <div>{JSON.stringify(product)}</div> */}
                <div>{JSON.stringify(this.props.addProduct)}</div>
                    <div style={{height:"250px", width:"250px", margin:"0px auto"}}>
                        <img src={down} alt="downloadimage" height="240px" width="240px" />
                    </div>
                    <div className="ProductDescription">
                        <div>Name : {product.productname}</div>
                        <div>Price : {product.productprice}</div>
                        <div>About Product : {product.productdescription}</div>
                    </div>
                    <div className="MarginTop">
                    <EditProductModal
                        product = {product} 
                        onEditProduct = { 
                            this.editProduct
                        }
                    />
                    </div>
                    {/* <Button variant="contained" color="primary"
                        onClick={this.editProduct}
                    >
                        EDIT PRODUCT
                    </Button> */}
                    <Button variant="contained" color="primary"
                        onClick={this.deleteProduct}
                        // onClick={this.props.deleteProduct(product)
                    >
                        DELETE PRODUCT
                    </Button>
                    
                    
                </div>
            </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {deleteProduct})(ProductList);