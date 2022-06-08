import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ContactList from './components/ContactList'
import EditProfile from './components/EditProfile';
import ShoppingList from './components/ShoppingList'

const App = () => {
  
  return (
    <View style={styles.container}>
      
     <EditProfile/>
     
    <StatusBar style="auto" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    
    paddingLeft: 60,
    paddingRight: 60,


  }
})