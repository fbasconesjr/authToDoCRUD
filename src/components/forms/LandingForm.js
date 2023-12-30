import { Text, View } from 'react-native'
import { PaperProvider, Button } from 'react-native-paper';
import * as React from 'react';

export default function LandingForm(props) {
  return (
    <View>
    <Button style={{
          justifyContent: 'flex-end',
          borderWidth: 1,
          width: 350,
          marginTop: 15,
          height: 45,
          paddingLeft: 10,
          marginBottom: 10,
          justifyContent: 'flex-end',
          backgroundColor: "#00491E",
          
        }}mode="contained" onPress={() => props.navigation.navigate("LoginPage")}>
    LOGIN
  </Button>
  <Button style={{
          color: "#00491E",
          textColor: "#00491E",
          borderWidth: 2,
        }}mode="outlined" onPress={() => props.navigation.navigate("SignUpPage")}>
    <Text style={{color:"#00491E"}}>SIGN UP</Text>
  </Button>
  </View>
  )
}