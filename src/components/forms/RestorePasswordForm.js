import { View } from 'react-native'
import { PaperProvider, Button , TextInput, Text, Appbar} from 'react-native-paper';
import * as React from 'react';


export default function RestorePasswordForm(props) {
  console.log(props);
  const [text, setText] = React.useState("");

  return (
    <PaperProvider>
    <View>
      <View style = {{justifyContent: "center", alignItems: "center"}}>
        <Text style = {{fontSize: 28, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall">Restore Password</Text>
      </View>
      <TextInput
        activeOutlineColor="green"
        style={{marginTop: 10,}}
        label="Email"
        value={text}
        onChangeText={text => setText(text)}
        mode='outlined'
        
      />
      <Button style={{
            justifyContent: 'flex-end',
            borderWidth: 1,
            width: 350,
            marginTop: 25,
            height: 45,
            paddingLeft: 10,
            marginBottom: 10,
            justifyContent: 'flex-end',
            backgroundColor: "#00491E",
            
          }}mode="contained" onPress={() => props.navigation.navigate("LoginPage")}>
      SEND RESET INSTRUCTION
    </Button>
    <View>
        <Text style = {{textAlign: 'center', fontSize: 14, fontWeight: 'bold', color: '#00491E',}}variant="displaySmall" onPress={() => props.navigation.navigate("LoginPage")}>BACK TO LOGIN</Text>
      </View>
  </View>
  </PaperProvider>
  )
}