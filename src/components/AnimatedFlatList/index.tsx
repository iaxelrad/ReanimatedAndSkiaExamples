import React from 'react';
import {FlatList, StyleSheet, View, ViewToken} from 'react-native';
import {useSharedValue} from 'react-native-reanimated';
import ListItem from './ListItem';

// type Props = {};

const data = new Array(50).fill(0).map((_, i) => ({id: i}));

const AnimatedFlatListScreen = (/* props: Props */) => {
  const viewableItems = useSharedValue<ViewToken[]>([]);

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        contentContainerStyle={styles.contentContainer}
        onViewableItemsChanged={({viewableItems: vItems}) => {
          console.log(viewableItems);
          viewableItems.value = vItems;
        }}
        renderItem={({item}) => (
          <ListItem item={item} viewableItems={viewableItems} />
        )}
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
