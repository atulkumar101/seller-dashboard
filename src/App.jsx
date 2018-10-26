import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import AddProductModal from './components/AddProductModal';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
// import { Redirect } from "react-router-dom";
import { userExist } from "./actions";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  // handleChange = () => {

  // }

  signIn = () => {
    console.log("username : " + this.state.username + " password " + this.state.password);
    const {username,password} = this.state;
    if(username === password){
      const {localStorage} = window;
      localStorage.setItem('USER',username);
      this.props.userExist();
      this.props.history.push("/sellerdashboard");
    }

  }
  
  componentDidMount(){
    this.props.userExist();
  }

  render() {
    return (
      <div className="App">
      {
        // JSON.stringify(this.props)
      }
      {
        // this.props.user
      }
      {this.props.user && this.props.user !==null ? this.props.history.push('/sellerdashboard') : ''}

        <div className="apptitle TextBigSize TextRed">          
           Seller DashBoard
        </div>
        <Input type="text" name="username" placeholder="username" 
        onChange={event => this.setState({ username: event.target.value })}
        />
        <br />
        <Input type="password" name="password" placeholder="password" 
        onChange={event => this.setState({ password: event.target.value })}/>
        <br />
        <br />
        <Button variant="contained" color="primary"
          onClick={this.signIn}
        >
          Sign IN
        </Button>
        <div>
          {/* {this.props.errormsg} */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  const { user } = state;
  return user;
}

export default connect(mapStateToProps,{userExist})(App);
