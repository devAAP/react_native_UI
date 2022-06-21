import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'

const Shopping = () => {
  return (
    <View style={styles.shopping}>
      <Text style={styles.title}>PAYMENT SUCCESSFUL</Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text> 
      <Image style={styles.image} source={require("../assets/images/Successful.png")}/>
      <TouchableOpacity style={styles.button}>
            <Text style={styles.btntext}>Get Started</Text>
        </TouchableOpacity>

        <View style={{padding: 20}}>
          <Text style={{opacity: 0.5,}}>Previous</Text>
                  
        </View>

    </View>
  )
}

export default Shopping

const styles = StyleSheet.create({
    shopping: {
        alignSelf: 'stretch',
    },
    title: {
      fontFamily: 'verdana',
      fontSize: 24,
      fontWeight: 'bold',
      padding: 10
    },
    button: {
      padding: 10,
      alignItems: 'center',
      backgroundColor: '#776FC3',
      marginTop: 25,
      borderRadius: 50,
      width: 200,
      alignSelf: 'center',
      shadowOpacity:40,   
      
      
    },
    btntext: {
      color: 'white',
      fontFamily: 'Helvetica',
      fontSize: 24,
      FontWeight: 'bold',
    },
    image: {
      height: 400,
      width: 400,
      padding: 10,
      alignSelf: 'center',
    }
})