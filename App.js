import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Assignment 4: Building a React Native Project on Android Emulator with Source Control</Text>
      <Text style={styles.name}>Raman Dhaliwal</Text>
      <Text style={styles.bio}>Mobile Application Development</Text>
      <Text style={styles.bio}>University of Winnipeg</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#95D9DA',
    alignItems: 'Left',
    justifyContent: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
},
bio: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginHorizontal: 20,
},
});
