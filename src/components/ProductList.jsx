import React, { Component } from 'react';
import EditProductModal from './EditProductModal';
import Button from '@material-ui/core/Button';
import down from '../Assets/download.jpg';
import {connect} from 'react-redux';
import '../App.css';

import {deleteProduct} from '../actions';

class ProductList extends Component{

    deleteProduct = () => {
        const { product } = this.props;
        console.log("this.props.product", {product});
        this.props.deleteProduct(product);
        console.log("this.props.product", {product});
    }

    render(){
        const {product} = this.props;
        console.log('Product List props(ProductList.jsx)', this.props);

        return(
            <div className="App Dib">
            <div className="ProductCard">
                <div>
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
                    <Button variant="contained" color="primary"
                        onClick={this.deleteProduct}
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
    const product = {state}
    return product;
}

export default connect(mapStateToProps, {deleteProduct})(ProductList);