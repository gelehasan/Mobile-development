import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Switch, Text, View } from 'react-native';

export default function Indicator() {
  return (
    <View style={styles.container}>
      <View  style={styles.ourView}>
      
        
        <Switch trackColor={{false:"purple", true:"blue"}} 
        thumbColor={"purple"} 
        ios_backgroundColor={""}/>
        <ActivityIndicator size="large" color={"white"}/>
      </View>

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
  ourView:{
    width:200,
    height:200,
    backgroundColor:"gray",


  }
});
