import React from 'react';
import {StyleSheet, View} from 'react-native';

// type Props = {};

const ListItem = (/* props: Props */) => {
  return <View style={styles.flatListContainer} />;
};

export default ListItem;

const styles = StyleSheet.create({
  flatListContainer: {
    height: 80,
    width: '90%',
    backgroundColor: '#78CAD2',
    marginTop: 20,
    borderRadius: 15,
    alignSelf: 'center',
  },
});
