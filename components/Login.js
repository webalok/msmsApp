import React from 'react';
import {View, Text, ActivityIndicator } from 'react-native';
const Login = (props) => {
  //console.warn(props);
  return (
    <View> 
      <ActivityIndicator  size="large" color="green" />
      <Text style={{fontSize: 30}}>Login component first edited</Text>
      <Text style={{fontSize: 25}}>Login screen second hai</Text>
      <Text style={{fontSize: 25}}>Shyam ji</Text>
      <Text style={{fontSize: 25}}>{props.data}</Text>
    </View>
  );
};

export default Login;
