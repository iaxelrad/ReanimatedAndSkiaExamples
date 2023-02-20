import React, {useEffect} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {snapPoint} from 'react-native-redash';

const {width, height} = Dimensions.get('window');

const aspectRatio = 722 / 368;
const CARD_WIDTH = width - 128;
const CARD_HEIGHT = CARD_WIDTH * aspectRatio;
const IMAGE_WIDTH = CARD_WIDTH * 0.9;
const DURATION = 250;
const side = (width + CARD_WIDTH) / 2;
const SNAP_POINTS = [-side, 0, side];

interface CardProps {
  card: {
    source: ReturnType<typeof require>;
  };
  index: number;
}

export const Card = ({card: {source}}: CardProps) => {
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    {x: number; y: number}
  >({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
    },
    onActive: (event, ctx) => {
      const {translationX, translationY} = event;
      x.value = translationX + ctx.x;
      y.value = translationY + ctx.y;
    },
    onEnd: event => {
      const {velocityX, velocityY} = event;
      const dest = snapPoint(x.value, velocityX, SNAP_POINTS);
      x.value = withSpring(dest, {velocity: velocityX});
      y.value = withSpring(0, {velocity: velocityY});
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  });

  return (
    <View style={styles.container} pointerEvents="box-none">
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={[styles.card, rStyle]}>
          <Image
            source={source}
            style={{
              width: IMAGE_WIDTH,
              height: IMAGE_WIDTH * aspectRatio,
            }}
            resizeMode="contain"
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
