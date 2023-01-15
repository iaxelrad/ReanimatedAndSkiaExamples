import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import ListItem from './ListItem';

// type Props = {};

const data = new Array(50).fill(0).map((_, i) => ({id: i}));

const AnimatedFlatListScreen = (/* props: Props */) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainer}
        renderItem={() => {
          return <ListItem />;
        }}
      />
    </View>
  );
};

export default AnimatedFlatListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {paddingTop: 40},
});
