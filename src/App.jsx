import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import { userExist } from "./actions";
import './App.css';

const theme = createMuiTheme({
  palette: {
      primary: {
          main: "#2A2A2A",//"#ff8f00",
          contrastText: "#fcfcfc"//"black"
           }, 
      secondary: {
           main: '#841958',//'#616161',
           contrastText:"white" 
           },     
      type:'dark' 
  },
});

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

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

  testComponent = () => {
    this.props.history.push("/test");
  }
  
  componentDidMount(){
    this.props.userExist();
  }

  render() {
    return (

      <MuiThemeProvider theme={theme}>
      <div className="App">
      {
        this.props.user ? this.props.history.push('/sellerdashboard') : ''
      }
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
        <Button variant="contained" color="primary"
          onClick={this.testComponent}
        >
          Test Component
        </Button>
      </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state){
  const { user } = state;
  return user;
}

export default connect(mapStateToProps,{userExist})(App);
