import React from 'react';
import {StyleSheet, ViewToken} from 'react-native';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

type ListItemProps = {
  viewableItems: Animated.SharedValue<ViewToken[]>;
  item: {
    id: number;
  };
};

const ListItem = ({viewableItems, item}: ListItemProps) => {
  const rStyle = useAnimatedStyle(() => {
    const isVisible = Boolean(
      viewableItems.value
        .filter(item => item.isViewable)
        .find(viewableItem => viewableItem.item.id === item.id),
    );

    return {opacity: withTiming(isVisible ? 1 : 0)};
  }, []);
  return <Animated.View style={[styles.flatListContainer, rStyle]} />;
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
