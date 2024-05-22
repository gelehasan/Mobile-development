import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Switch, Text, View, Button } from 'react-native';
import Images from './components/images/images';
export default function App() {
  function alertUser (){
    console.log("Hello")
  }
  return (
    <View style={styles.container}>
     <Images />
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
