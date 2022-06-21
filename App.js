import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';
import ContactList from './components/ContactList'
import EditProfile from './components/EditProfile';
import ShoppingList from './components/ShoppingList'
import Shopping from './Layouts/Shopping'
import Payment from './Layouts/Payment'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Profile from './screens/Profile'
import Setting from './screens/Setting'
import { AntDesign } from '@expo/vector-icons';


const Stack =  createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {backgroundColor:'red'}, headerRight: ()=> (<AntDesign name="search1" size={24} color="black" />),
      
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Settings" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
    // <View style={styles.container}>
    //  <Payment/>
    // <StatusBar style="auto" />
    // </View>
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