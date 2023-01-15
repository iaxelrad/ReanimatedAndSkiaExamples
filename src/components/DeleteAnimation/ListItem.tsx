import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {TaskInterface} from '.';

type ListItemProps = {
  task: TaskInterface;
};

const ListItem = ({task}: ListItemProps) => {
  const translateX = useSharedValue(0);
  const gesture = Gesture.Pan()
    .onStart(event => {
      translateX.value = event.translationX;
    })
    .onEnd(() => {
      translateX.value = withTiming(0);
    });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={styles.taskContainer}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.task, rStyle]}>
          <Text style={styles.taskTitle}>{task.title}</Text>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
  },
  task: {
    width: '90%',
    height: 70,
    marginVertical: 10,
    justifyContent: 'center',
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 20,
    },
    shadowRadius: 10,
    elevation: 5,
  },
  taskTitle: {
    fontSize: 16,
  },
});
