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
        this.setState(prevState => ({
          showInputField : !prevState.showInputField
        }))
    }

    editProduct = () => {
        const {product} = this.props;
        const {productName, productPrice, productDescription} = this.state;
        const productDetails = {productName, productPrice, productDescription};
        console.log("Details of Product to be Edited", productDetails);
        this.props.editProduct(product, productDetails);
        this.changeVisibility();
    }

    handleInputChange = (event) => {
      this.setState({
        [event.target.name] : event.target.value
      })
    }

    render() {
      return(
        <div>
          { this.state.showInputField 
              ?
              <div>
              <Input type="text" name="productName" placeholder="Enter Product Name"
              onChange={this.handleInputChange}
              />
                  <br />
              <Input type="text" name="productDescription" placeholder="Enter Product Description"
              onChange={this.handleInputChange} />
                  <br />
              <Input type="text" name="productPrice" placeholder="Enter Product Price"
                onChange={this.handleInputChange}/>
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

export default connect(null, {editProduct})(EditProductModal);