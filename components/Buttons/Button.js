import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Switch, Text, View, Button } from 'react-native';

export default function Button() {
  function alertUser (){
    console.log("Hello")
  }
  return (
    <View style={styles.container}>
      <Button title='press me!' onPress={()=> alertUser}/>
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
  }
});
