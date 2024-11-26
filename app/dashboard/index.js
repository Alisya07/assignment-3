import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function App() {
  // This function can be used to handle button click events
  const handlePress = () => {
    alert('Welcome to the Home Page!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to My Home Page</Text>
      <Text style={styles.subtitle}>This is a simple React Native app with Expo.</Text>
      <Button title="Click Me!" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fb6f92',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 30,
  },
});
