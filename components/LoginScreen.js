import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
    
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} 
       secureTextEntry={true} placeholder="Password" />
       <Text style={{ color: "blue", textAlign: "right" }}>
            Forgot password? 
        </Text>
      <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Log in</Text>
        </TouchableOpacity>
        <Text style={{marginTop: 40, marginBottom: 40, alignSelf: 'center'}}>
            Don't have an account?  <strong style={{color:'#5128AB'}}>Sign up</strong>
        </Text>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        
    },
    title: { 
fontSize: 30,
fontFamily: 'Helvetica',
fontWeight: 'bold',
color: '#5128AB',
paddingBottom:10,
marginBottom: 40,
    },
input: {
alignSelf: 'stretch',
height:40,
marginBottom: 30,
color: '#5128AB',
borderBottomWidth:2, 
borderBottomColor: '#5128AB',
},
button: {
    alignSelf: 'stretch',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#5128AB',
    marginTop: 25,
    borderRadius: 10,
},
btntext: {
    color: '#fff',
    fontFamily: 'Helvetica',
    fontSize: 24,
    FontWeight: 'bold',
},

})