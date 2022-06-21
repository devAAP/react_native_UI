import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from '@react-navigation/native'

const Home = (props) => {
    const navigation = useNavigation();

    const navigateToProfile = () => {
        navigation.navigate("Profile");
    }

    return (
        <View style={styles.container}>
         <TouchableOpacity onPress={navigateToProfile} style={{padding: 16, backgroundColor: 'tomato'}}>
         <Text>Home</Text>
         </TouchableOpacity>
        </View>
      )
    

};


  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Home;