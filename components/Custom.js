import React, {Component} from 'react';
import {View, Text, Button, ActivityIndicator} from 'react-native';

class Custom extends Component {
  
  constructor(){
    super();
    this.state = {data:'custom-data'};
  }


  render() {
    //console.warn(this.props.data);
    //console.warn(this.state);
    function baby(){
     alert('Baby class');
    }
    return (
      <View> 
        <ActivityIndicator size="large" color="black" />
        <Text>Custom  component - {this.props.data}</Text>
        <Button title="Submit class" onPress={baby} />
        <Text></Text>
        <Text>{this.state.data}</Text>
        <Button title="Change state" onPress={ ()=> {this.setState({data:'Change state'})} } />
      </View>
    );
  }
}

export default Custom;
