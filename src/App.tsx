import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function App() {
  return (
    <View style={styles.container}>
      <Text>Reanimated And Skia Examples</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default App;
