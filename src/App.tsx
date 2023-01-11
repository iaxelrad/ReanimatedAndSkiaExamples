import React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import BackgroundGradient from './components/BackgroundGradient';

const {width: SCREEN_WIDTH} = Dimensions.get('window');
const HEIGHT = 256;
const WIDTH = SCREEN_WIDTH * 0.9;

const CARD_HEIGHT = HEIGHT - 5;
const CARD_WIDTH = WIDTH - 5;

function App() {
  const rotateX = useSharedValue(0);
  const rotateY = useSharedValue(0);

  const gesture = Gesture.Pan()
    .onBegin(event => {
      rotateX.value = withTiming(
        interpolate(event.y, [0, CARD_HEIGHT], [10, -10], Extrapolate.CLAMP),
      );
      rotateY.value = withTiming(
        interpolate(event.x, [0, CARD_WIDTH], [-10, 10], Extrapolate.CLAMP),
      );
    })
    .onUpdate(event => {
      rotateX.value = interpolate(
        event.y,
        [0, CARD_HEIGHT],
        [10, -10],
        Extrapolate.CLAMP,
      );
      rotateY.value = interpolate(
        event.x,
        [0, CARD_WIDTH],
        [-10, 10],
        Extrapolate.CLAMP,
      );
    })
    .onFinalize(() => {
      rotateX.value = withTiming(0);
      rotateY.value = withTiming(0);
    });

  const rStyle = useAnimatedStyle(() => {
    const rotateXValue = `${rotateX.value}deg`;
    const rotateYValue = `${rotateY.value}deg`;
    return {
      transform: [
        {perspective: 300},
        {rotateX: rotateXValue},
        {rotateY: rotateYValue},
      ],
    };
  }, []);

  return (
    <View style={styles.container}>
      <BackgroundGradient width={WIDTH} height={HEIGHT} />
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.animatedViewContainer, rStyle]}>
          <View style={styles.placeholderContainer}>
            <View style={styles.circle} />
            <View style={styles.column}>
              <View style={styles.rectContainer} />
              <View style={styles.rectContainer} />
            </View>
          </View>
        </Animated.View>
      </GestureDetector>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  animatedViewContainer: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 20,
    zIndex: 300,
  },
  placeholderContainer: {
    position: 'absolute',
    bottom: '10%',
    left: '10%',
    flexDirection: 'row',
  },
  circle: {
    height: 50,
    aspectRatio: 1,
    borderRadius: 25,
    backgroundColor: '#272f46',
  },
  column: {
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'space-around',
  },
  rectContainer: {
    height: 20,
    width: 80,
    borderRadius: 25,
    backgroundColor: '#272f46',
  },
});

export default () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <App />
    </GestureHandlerRootView>
  );
};
