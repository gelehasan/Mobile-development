import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Yes i can see the changes</Text>
     

      <View style={styles.blueContainer}>

        <Text style={styles.buttonStyle}>Click this button</Text>
      </View>

      
      <View style={styles.blueContainer}>

        <Text style={styles.buttonStyle}>Click this button</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
   
    alignItems: 'center',
    justifyContent: 'center',
   borderWidth:10,
   borderColor:'red',
   gap:10
  },
  blueContainer:{
    backgroundColor:'black',
    borderWidth:4,
    padding:9,
    borderRadius:10,
    borderColor:'blue'
  },
  buttonStyle:{
    fontSize:30,
  color:'white',

  }
});
