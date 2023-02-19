import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type Props = {};

const GestureHandlerScreen = (props: Props) => {
  return (
    <View style={styles.container}>
      <Text>GestureHandlerScreen</Text>
    </View>
  );
};

export default GestureHandlerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
