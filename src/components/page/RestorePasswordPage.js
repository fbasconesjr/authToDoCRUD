import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Logo1 from '../forms/Logo1'
import RestorePasswordForm from '../forms/RestorePasswordForm'

export default function RestorePasswordPage(props) {
  return (
    <View style={styles.box}>
      <Logo1/>
      <RestorePasswordForm {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    marginTop:50,
  },
});