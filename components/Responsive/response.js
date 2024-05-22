

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function Responsive() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.boxRed}></View>
        <View style={styles.boxBlack}></View>
        <View style={styles.boxRed}></View>
      </SafeAreaView>

      <View>
        <Text> Button</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
    flexDirection: "column",

  },
  boxRed: {
    width: '100%',
    height: 50,
    backgroundColor: "red",
    marginVertical: 10,
  },
  boxBlack: {
    width: 50,
    height: 50,
    backgroundColor: "black",
    marginVertical: 10,
  },
});
