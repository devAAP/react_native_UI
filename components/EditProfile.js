import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { AntDesign, Feather, EvilIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';


export default function EditProfile() {
  return (
    <View style={styles.container}>
      <View style={styles.titleBar}>
                    <AntDesign name="arrowleft" size={24} color="#52575D" />
                    <Text style={{fontSize:24}}>Edit Profile</Text>
                    <Feather name="more-vertical" size={24} color="black" />  
                </View>
                <View style={{borderBottomWidth:2, borderColor:"#CDCDCD", shadowColor:"gray", marginBottom:10}}></View>
                <View style={{ alignSelf: "center" }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View
        style={{
          height: 200,
          width: 200,
          margin: 10,
          borderRadius: 100,
          flexDirection: "row",
          justifyContent: "flex-end",
          
          // overflow: "hidden"
        }}
      >
        <Image style={{height: '100%', width: '100%', borderRadius:100 }} source={require("../assets/dog2.jpg")}/>
        <View style={{height: 30, 
          width: 30, 
          backgroundColor:"#5bc8ff", 
          position: 'absolute', 
          borderRadius: 15,
          flexDirection: "row",
          alignSelf:'flex-end',
          alignItems: 'center',
          right: 10,
          }}>
        <EvilIcons name="camera" size={30} color="black" />
        </View>
        
          
        </View>
        

      </View>
     
    </View>
       
                <View style={{padding: 10}}>
                  <Text style={{opacity: 0.5, }}>School</Text>
                  <Text style={{fontSize: 16, color: "black"}}>Codetrain</Text>
                </View>
                
                <View style={{padding: 10}}>
                  <Text style={{opacity: 0.5, }}>Email address</Text>
                  <Text style={{fontSize: 16, color: "black"}}>masterjee@live.com</Text>
                </View>
    
                <View style={{padding: 10}}>
                  <Text style={{opacity: 0.5, color:"#5bc8ff", }}>Name</Text>
                  <Text style={{fontSize: 16,borderBottomWidth:1, borderColor:"#CDCDCD",}}>Patrick Ag</Text>
                </View>

                <View style={{padding: 10}}>
                  <Text style={{opacity: 0.5, color:"#5bc8ff" }}>Nickname</Text>
                  <Text style={{fontSize: 16,borderBottomWidth:1, borderColor:"#CDCDCD",}}>pee nana</Text>
                </View>

                <View style={{padding: 10, }}>
                  <Text style={{opacity: 0.5, color:"#5bc8ff" }}>Emergency Number</Text>
                  <Text style={{fontSize: 16,borderBottomWidth:1, borderColor:"#CDCDCD", }}>+233265461641
                  <AntDesign style={{flexDirection: "row", marginHorizontal:20,}}name="contacts" size={24} color="black"/>
                  </Text>
                </View>

                <View style={{padding: 10
                }}>
      <TouchableOpacity style={styles.button} onPress={()=>onPress()}
       ><Text styles={styles.text}>UPDATE PROFILE</Text></TouchableOpacity>
                </View>

               
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 50,
    marginHorizontal: 16,
    paddingBottom: 25,
},
text: {
  fontFamily: "HelveticaNeue",
  color: "#52575D",
},

camera: {
  backgroundColor: "#5bc8ff",
        position: "absolute",
        bottom: 5,
        right: 0,
        width: 30,
        height: 30,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
},

bottomButton: {

},

button: {
  padding: 10,
  backgroundColor: '#5bc8ff',
  height: 40,
  borderRadius: 10,
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 20,
}


});
