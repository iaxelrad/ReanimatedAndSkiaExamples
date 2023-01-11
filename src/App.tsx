import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet from './components/BottomSheet';

function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={styles.container}>
        <StatusBar barStyle={'light-content'} />
        <BottomSheet />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },
});

export default App;
