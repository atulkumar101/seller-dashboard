import React, {Component} from 'react';
import { connect } from "react-redux";
import { userExist } from "./actions";
import ProductList from './components/ProductList';
import AddProductModal from './components/AddProductModal';
import Button from '@material-ui/core/Button';
import './App.css';


class SellerDashBoard extends Component{

    constructor(props){
        super(props);
        this.state = {
            // PRODUCTS : [
            //     {productname: "android 1", productprice: "10000", productdescription:"some description 1"},
            //     {productname: "android 2", productprice: "20000", productdescription:"some description 2"},
            //     // {productname: "android 3", productprice: "30000", productdescription:"some description 3"},
            //     // {productname: "android 4", productprice: "40000", productdescription:"some description 4"},
            // ]
        }
    }

    signout = ()=>{
        const {localStorage} = window;
        localStorage.removeItem('USER');
        if(localStorage.getItem('USER')===null)
        this.props.history.push('/');
    }

    addProduct = (productname, productprice, productdescription) => {
        // console.log("this.state 1", this.state);
        this.state.PRODUCTS.push(
            {productname, productprice, productdescription}
        )
        // console.log("this.state 2", this.state);
        this.setState({});
        // console.log("this.state 3", this.state);
    }

    deleteProduct = (product) => {
        // console.log("this.state 1", this.state);
        this.state.PRODUCTS.splice(
            this.state.PRODUCTS.indexOf(product), 1
        )
        // console.log("this.state 2", this.state);
        this.setState({});
        // console.log("this.state 3", this.state);
    }

    editProduct = (product, productname, productprice, productdescription) => {
        // OR simply edit
        // console.log("this.state 1", this.state);
        this.state.PRODUCTS.splice(
            this.state.PRODUCTS.indexOf(product),
            1, 
            {productname, productprice, productdescription}
        )
        this.setState({});
    }
    
    render(){
        const rows = [];

        this.props.productList.forEach((product) => {
            rows.push(
                <ProductList
                    productlist = {this.props.addProduct}
                    product = {product} 
                    key = {product.productname}
                    onDeleteProduct = {this.deleteProduct}
                    onEditProduct= {this.editProduct}
                />
            )
        });

        return(
            <div className="App">
            { this.props.user === null ? this.props.history.push('/') : ''}
            <div>
                <div>
                {
                    // JSON.stringify(this.props)
                }
                </div>
                <Button variant="contained" color="primary"
                    style = {{float: 'right'}}
                    onClick={this.signout}
                >
                    Signout
                </Button>
                <div className="apptitle TextBigSize TextRed">          
                    Seller DashBoard
                </div>
                <div>
                {
                    // JSON.stringify(this.props.productList)
                }
                </div>
                {/* <div>{window.localStorage.getItem('USER')}</div> */}
                <div>{rows}</div>
                <AddProductModal 
                    // productlist={this.state.PRODUCTS}
                    // onAddProduct = {this.addProduct}
                 />
            </div>
            </div>
        )
    }

}

function mapStateToProps(state){
    // const {addProduct, user} = state;
    return state;
    // return { productList: state.productList };
}

export default connect(mapStateToProps,{userExist})(SellerDashBoard);
// export default connect(({user})=>user,{userExist})(SellerDashBoard);
