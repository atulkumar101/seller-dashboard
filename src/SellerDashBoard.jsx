import React, {Component} from 'react';
import { connect } from "react-redux";
import { userExist, userSignOut } from "./actions";
import ProductList from './components/ProductList';
import AddProductModal from './components/AddProductModal';
import Button from '@material-ui/core/Button';

import './App.css';


class SellerDashBoard extends Component{

    signout = () => {
        this.props.userSignOut();
        this.props.history.push('/');
    }
    
    render(){
        const rows = [];

        this.props.productList.forEach((product) => {
            rows.push(
                <ProductList
                    productlist = {this.props.addProduct}
                    product = {product} 
                    key = {product.productname}
                />
            )
        });
        return(
            <div className="App">
            { this.props.user === null ? this.props.history.push('/') : ''}
            <div>
                <Button variant="contained" color="primary"
                    style = {{float: 'right'}}
                    onClick={this.signout}
                >
                    Signout
                </Button>
                <div className="apptitle TextBigSize TextRed">          
                    Seller DashBoard
                </div>
                <div>{rows}</div>
                <AddProductModal />
            </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    const {user, productList} = state;
    const data = {user, productList};
    return data;
}

export default connect(mapStateToProps,{userExist, userSignOut})(SellerDashBoard);