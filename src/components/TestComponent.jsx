import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Autocomplete from 'react-google-autocomplete';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import '../App.css';

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

class TestComponent extends Component{

    constructor(props){
      super(props);
      this.state ={
        completed: false,
        id: 0,
        title: "notitle",
        userId: 0,
        json: {},
        response: {},
      }
    }

    testComponent = () => {
      this.props.history.push("/sellerdashboard");
    }

    handleTestClick = () => {
      console.log("this.state 1", this.state);
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => {
        console.log("JSON",json);
        const {completed, id, title, userId} = json;
        console.log("ncdsindico", completed, id, title, userId);

      })
      // .then(json => {
      //       const {completed, id, title, userId} = json;
      //       console.log("ncdsindico", completed, id, title, userId);
      //       // this.setState({completed, id, title, userId});
      // })
      .then(console.log("this.state 2", this.state))
      console.log("FINISH");
    }

    render() {
      return(
      <MuiThemeProvider theme={theme}>
      <div>
          <div className="App">
            <div>TestComponent</div>
            <div className="ProductCard">
            <Autocomplete
              style={{width: '90%'}}
              onPlaceSelected={(place) => {
                console.log(place);
              }}
              types={['(regions)']}
              componentRestrictions={{country: "ru"}}
            />
            </div>
          <Button variant="contained" color="primary"
            onClick={this.handleTestClick}
          >
            CLICK
          </Button>
        </div>
        <Button 
          variant="contained" 
          color="primary"
          onClick={this.testComponent}
        >
        BACK
      </Button>
      </div>
      </MuiThemeProvider>
      )
    }
}

export default TestComponent;