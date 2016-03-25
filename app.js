import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import Divider from 'material-ui/lib/divider';
import Paper from 'material-ui/lib/paper';

const paperStyle = {
   width: 350,
};

const style = {
  marginLeft: 20,
  marginBottom : 10,
};

const TextFieldExampleSimple = () => (
  <Paper zDepth={2} style={paperStyle}>
    <TextField
	style = {style}
     floatingLabelText="Login"

    />
    <Divider 
	style = {style}
/>
    <TextField
	style= {style}
      floatingLabelText="Password"
      type="password"
    /><br/>
    <RaisedButton 
	style = {style}
label="Submit" primary={true}/>
  </Paper>
);

ReactDOM.render(
	<TextFieldExampleSimple/>,
	document.getElementById('app')
);
