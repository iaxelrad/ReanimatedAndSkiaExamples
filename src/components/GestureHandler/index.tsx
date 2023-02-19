import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {useFollowAnimatedPosition} from './useFollowAnimatedPosition';

type Props = {};

const GestureHandlerScreen = (props: Props) => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const context = useSharedValue({x: 0, y: 0});

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: translateX.value, y: translateY.value};
    })
    .onUpdate(event => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    });

  const {
    followX: blueFollowX,
    followY: blueFollowY,
    rStyle: rBlueCircleStyle,
  } = useFollowAnimatedPosition({
    x: translateX,
    y: translateY,
  });

  const {
    followX: redFollowX,
    followY: redFollowY,
    rStyle: rRedCircleStyle,
  } = useFollowAnimatedPosition({
    x: blueFollowX,
    y: blueFollowY,
  });

  const {rStyle: rGreenCircleStyle} = useFollowAnimatedPosition({
    x: redFollowX,
    y: redFollowY,
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circle, {backgroundColor: 'green'}, rGreenCircleStyle]}
      />
      <Animated.View
        style={[styles.circle, {backgroundColor: 'red'}, rRedCircleStyle]}
      />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.circle, rBlueCircleStyle]} />
      </GestureDetector>
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
  circle: {
    position: 'absolute',
    height: 80,
    aspectRatio: 1,
    backgroundColor: 'blue',
    borderRadius: 40,
    opacity: 0.8,
  },
});
