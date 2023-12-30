import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Logo1 from '../forms/Logo1'
import SignUpForm from '../forms/SignUpForm';

export default function SignUpPage(props) {
  return (
    <View style={styles.box}>
      <Logo1/>
      <SignUpForm {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginTop:50,
  },
});