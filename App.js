/* eslint-disable no-alert */
import React, { Component } from 'react';
import {View, Text, Button, Alert} from 'react-native';
import Login from './components/Login';
import Registration from './components/Registration';
import Custom from './components/Custom';

const data = "some data i passed";   



const App = () => {
   
  function customAlert() {
    alert('Custom alert calling..');
    console.log('MSMS');
  }

  return (
    <View>
      <Login data={data} /> 
      <Registration />
      <Button title="Login" onPress={() => alert('Hello')} />
      <Text />
      <Button title="Custom function" onPress={customAlert} />

      <Custom data={data} />

    </View>
  );
};

export default App;
