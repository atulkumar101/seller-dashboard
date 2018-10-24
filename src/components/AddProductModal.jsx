import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import {addProduct} from '../actions';
import {connect} from 'react-redux';

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
        this.props.addProduct(productName, productPrice, productDescription);
        // // console.log("this.state", this.state);
        // // console.log("this.props", this.props);
        // const { productName, productPrice, productDescription } = this.state;
        // // add Product in parent Component
        // this.props.onAddProduct(productName, productPrice, productDescription);
        // // console.log("this.props.productlist", this.props.productlist);
        this.setState({});
    }

    render(){
        return(
            <div className="App">
                <h2>Add Product Modal</h2>

                    {/* <Button variant="contained" color="primary">Submit</Button> */}
                    <Input type="text" name="productName" placeholder="Enter Product Name"
                    onChange={event => this.setState({productName: event.target.value})}/>
                    <br />
                    <Input type="text" name="productDescription" placeholder="Enter Product Description"
                    onChange={event => this.setState({productDescription: event.target.value})} />
                    <br />
                    <Input type="text" name="productPrice" placeholder="Enter Product Price"
                    onChange={event => this.setState({productPrice: event.target.value})}/>
                    <br />
                    <br />
                    <Button variant="contained" color="primary" onClick={this.addProduct}>
                    Submit
                    </Button>
                
            </div>
        )
    }

}

function mapStateToProp(state){
    return state;
}

export default connect(mapStateToProp, {addProduct})(AddProductModal);