import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import {connect} from 'react-redux';

import {editProduct} from '../actions';

class EditProductModal extends Component{

    constructor(props){
        super(props);
        this.state = {
            productName: '',
            productDescription: '',
            productPrice: '',
            showInputField: false
        }
    }

    changeVisibility = () => {
        this.setState({
            showInputField : !this.state.showInputField
        })
    }

    editProduct = () => {
        // delete on clicked product
        const {product} = this.props;
        const {productName, productPrice, productDescription} = this.state;
        this.props.editProduct(product,productName, productPrice, productDescription);
        // this.props.onEditProduct(
        //     this.props.product, 
        //     productName, 
        //     productPrice, 
        //     productDescription
        // );
        this.changeVisibility();
    }

    render() {
        return(
            <div>
                { this.state.showInputField 
                    ?
                    <div>
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
                    <Button variant="contained" color="primary"
                        onClick={this.editProduct}
                    >
                        Submit Changes
                    </Button>
                        <br />
                        <br />
                    </div>
                    :
                    <div></div>
                }

                {
                    this.state.showInputField
                    ?
                    <div></div>
                    :
                    <div>
                    <Button variant="contained" color="primary"
                        onClick={this.changeVisibility}
                    >
                        EDIT PRODUCT
                    </Button>
                    <br />
                    <br />
                    </div>
                }
                
            </div>
        )
    }

}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps,{editProduct})(EditProductModal);