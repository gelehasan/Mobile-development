import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Switch, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function Images() {
  function alertUser (){
    alert("Hello")
  }
  return (
    <View style={styles.container}>

        <TouchableOpacity style={styles.faceTape} onPress={alertUser}></TouchableOpacity>
      <Image 
        source={require("../../assets/puppies.jpg")}
        style={styles.puppy}
        resizeMode='contain'
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems:"center",
    justifyContent:"center"
   
  },
  puppy:{
    width:200,
    height:200
  },
  faceTape:{
    width:100,
    height:100,
    borderWidth:3,
    position:"absolute",
    borderColor:"red",
    top:350,
    left:30,
    zIndex:99
  }
});
