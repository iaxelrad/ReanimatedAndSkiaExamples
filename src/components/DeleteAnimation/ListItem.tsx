import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {
  // Gesture,
  // GestureDetector,
  // GestureHandlerRootView,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TaskInterface} from '.';

type ListItemProps = {
  task: TaskInterface;
};

const LIST_ITEM_HEIGHT = 70;

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const TRANSLATE_X_THRESHOLD = -SCREEN_WIDTH * 0.3;

const ListItem = ({task}: ListItemProps) => {
  const translateX = useSharedValue(0);

  // const gesture = Gesture.Pan()
  //   .onStart(event => {
  //     translateX.value = event.translationX;
  //   })
  //   .onEnd(() => {
  //     translateX.value = withTiming(0);
  //   });

  const gesture = useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
    onActive: event => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDismissed = translateX.value < TRANSLATE_X_THRESHOLD;
      if (shouldBeDismissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
      } else {
        translateX.value = withTiming(0);
      }
    },
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

  // return (
  //   <View style={styles.taskContainer}>
  //     <View style={styles.iconContainer}>
  //       <Icon name={'trash-alt'} size={70 * 0.4} color={'red'} />
  //     </View>
  //     <GestureDetector gesture={gesture}>
  //       <Animated.View style={[styles.task, rStyle]}>
  //         <Text style={styles.taskTitle}>{task.title}</Text>
  //       </Animated.View>
  //     </GestureDetector>
  //   </View>
  // );

  return (
    <View style={styles.taskContainer}>
      <View style={styles.iconContainer}>
        <Icon name={'trash-alt'} size={70 * 0.4} color={'red'} />
      </View>
      <PanGestureHandler onGestureEvent={gesture}>
        <Animated.View style={[styles.task, rStyle]}>
          <Text style={styles.taskTitle}>{task.title}</Text>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  taskContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  task: {
    width: '90%',
    height: LIST_ITEM_HEIGHT,
    justifyContent: 'center',
    paddingStart: 20,
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
    fontSize: 14,
  },
  iconContainer: {
    height: LIST_ITEM_HEIGHT,
    width: LIST_ITEM_HEIGHT,
    position: 'absolute',
    right: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
