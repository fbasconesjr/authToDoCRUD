import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../forms/Header'
import LandingForm from '../forms/LandingForm'

export default function LandingPage(props) {
  return (
    <View style={styles.box}>
      <Header/>
      <LandingForm {...props}/>
    </View>
  )
}

const styles = StyleSheet.create({
    box: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      marginBottom: 100,
    },
  });
