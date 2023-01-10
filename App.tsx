import {Canvas} from '@shopify/react-native-skia';
import React from 'react';
import {StyleSheet, View} from 'react-native';

function App() {
  return <Canvas style={{flex: 1, backgroundColor: 'red'}}></Canvas>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default App;
