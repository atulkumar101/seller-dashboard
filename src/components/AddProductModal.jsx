import React, { Component } from 'react';
import {connect} from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import {addProduct} from '../actions';

class AddProductModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            productName: "",
            productDescription: "",
            productPrice: ""
        }
    }

    addProduct = () => {
        const {productName, productPrice, productDescription} = this.state;
        const productDetails = {productName, productPrice, productDescription};
        this.props.addProduct(productDetails);
    }

    handleInputChange = (event) => {
      this.setState({
          [event.target.name] : event.target.value
      })
    }

    render(){
        return(
            <div className="App">
                <h2>Add Product Modal</h2>
                <Input type="text" name="productName" placeholder="Enter Product Name"
                onChange={this.handleInputChange}/>
                <br />
                <Input type="text" name="productDescription" placeholder="Enter Product Description"
                onChange={this.handleInputChange} />
                <br />
                <Input type="text" name="productPrice" placeholder="Enter Product Price"
                onChange={this.handleInputChange}/>
                <br />
                <br />
                <Button variant="contained" color="primary" onClick={this.addProduct}>
                Submit
                </Button>
            </div>
        )
    }

}

export default connect(null, {addProduct})(AddProductModal);