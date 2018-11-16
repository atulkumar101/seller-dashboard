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

class TestComponent2 extends Component{

  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput() {
    console.log("Inside focusTextInput");
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    this.textInput.current.focus();
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} 
        />

        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }

  // render() {
  //   return(
  //   <MuiThemeProvider theme={theme}>
  //   <div>
  //     <div className="App">
  //       <div>TestComponent 2</div>
        
  //     <Button variant="contained" color="primary"
  //       // onClick={this.}
  //     >
  //       CLICK
  //     </Button>
  //     </div>
  //     <Button 
  //       variant="contained" 
  //       color="primary"
  //       onClick={this.testComponent}
  //     >
  //     BACK
  //   </Button>
  //   </div>
  //   </MuiThemeProvider>
  //   )
  // }
}

export default TestComponent2;