import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import Logo from '../forms/Logo'
import DetailsForm from '../forms/DashboardForm'

export default function DashboardPage(props) {
  return (
    <View style={styles.box}>
      <Logo/>
      <DetailsForm {...props}/>
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