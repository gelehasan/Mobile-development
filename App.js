import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, SafeAreaView, StyleSheet, Switch, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Images from './components/images/images';

const Stack = createNativeStackNavigator();

function HomeScreen ({navigation}){

  return(
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title='To the details'
        onPress={()=>navigation.navigate("Detail")}
      ></Button>
    </View>
  )
}

function DetailsScreen (){

  return(
    <View style={styles.container}>
      <Text>Details Screen</Text>
    </View>
  )
}
export default function App() {
  function alertUser (){
    console.log("Hello")
  }
  return (
<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Detail' component={DetailsScreen} />

    </Stack.Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    alignItems:"center",
    justifyContent:"center"
  }
});
