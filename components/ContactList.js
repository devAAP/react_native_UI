import React from 'react';
import {  StyleSheet,Image, Text, View, FlatList} from 'react-native';
import { MaterialCommunityIcons, MaterialIcons, Feather, } from '@expo/vector-icons';

                  

const users= [
    {
        name: 'Joana Short',
        phone: '+4401128823',
        image: require('../assets/images/profile1.jpg'),
    },

    {
        name: 'Zack Shun',
        phone: '+4414983736',
        image: require('../assets/images/profile2.jpg'),
    },

    {
        name: 'Hendricks School',
        phone: '+4428830208',
        image: require('../assets/images/profile1a.jpg'),
    },

    {
        name: 'Cruxie Riche',
        phone: '+440113442224',
        image: require('../assets/images/profile3a.jpg'),
    },

    {
        name: 'Joe Konan',
        phone: '+440112222332',
        image: require('../assets/images/profile3.jpg'),
    },
    {
        name: 'Julius Caesar',
        phone: '+44014556321',
        image: require('../assets/images/profile5.jpg'),
    },

]; 

export default function ContactList ()  {
  
    return (
      <View style={styles.container}>
        <FlatList
        data={users}
        keyExtractor={(user, index) => {
          return user.name + index;
        }}
        renderItem={({ item }) => (
          <View
            style={{
              flex: 1,
              padding: 8,
              marginVertical: 2,
              backgroundColor: "#fff",
              flexDirection: "row",
              // margin: 10,
              // padding: 10,s
              borderRadius: 5
            }}
          >
           
            <Image
              source={item.image}
              style={{ height: 60, width: 60, borderRadius: 30 }}
            />
            <View style={{alignItems: "center",underlineStyle: "none",justifyContent:'space-around', flex:1}}>
            <Text style={{fontSize: "100%", fontWeight: "bold"}}>{item.name}</Text>
            <Text style={{}}>{item.phone}</Text>
            </View>

            <View style={styles.button}>
            <MaterialIcons name="phone" size={24} color="#2AACFF"  />
            <MaterialCommunityIcons name="message-processing" size={24} color="#2AACFF"/>
            <Feather name="more-vertical" size={24} color="gray"/>
            </View>
          </View>
        )}
      />
        
      </View>
    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
   marginTop: 60
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 30,
    justifyContent: 'space-between',
  
  }
});