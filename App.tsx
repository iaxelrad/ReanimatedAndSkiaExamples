import {
  Canvas,
  Group,
  SkiaMutableValue,
  SweepGradient,
  useTouchHandler,
  useValue,
  vec,
} from '@shopify/react-native-skia';
import React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import {RoundedItem} from './components/RoundedItem';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const SQUARE_AMOUNT_HORIZONTAL = 10;
const SQUARE_CONTAINER_SIZE = SCREEN_WIDTH / SQUARE_AMOUNT_HORIZONTAL;
const PADDING = 10;
const SQUARE_SIZE = SQUARE_CONTAINER_SIZE - PADDING;

const SQUARES_AMOUNT_VERTICAL =
  Math.floor(SCREEN_HEIGHT / SQUARE_CONTAINER_SIZE) - 3;

const CANVAS_WIDTH = SCREEN_WIDTH;
const CANVAS_HEIGHT = SQUARES_AMOUNT_VERTICAL * SQUARE_CONTAINER_SIZE;

function App() {
  const touchedPoint: SkiaMutableValue<{
    x: number;
    y: number;
  } | null> = useValue<{x: number; y: number} | null>(null);
  const touchHandler = useTouchHandler({
    onStart: event => {},
    onActive: event => {
      console.log({x: event.x, y: event.y});
      touchedPoint.current = {x: event.x, y: event.y};
    },
    onEnd: event => {},
  });
  return (
    <View style={styles.container}>
      <Canvas
        style={{
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
        }}
        onTouch={touchHandler}>
        <Group>
          {new Array(SQUARE_AMOUNT_HORIZONTAL).fill(0).map((_, i) => {
            return new Array(SQUARES_AMOUNT_VERTICAL).fill(0).map((_, j) => {
              return (
                <RoundedItem
                  point={touchedPoint}
                  key={`i${i}-j${j}`}
                  x={i * SQUARE_CONTAINER_SIZE + PADDING / 2}
                  y={j * SQUARE_CONTAINER_SIZE + PADDING / 2}
                  width={SQUARE_SIZE}
                  height={SQUARE_SIZE}
                />
              );
            });
          })}
          <SweepGradient
            c={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
            colors={['cyan', 'magenta', 'yellow', 'cyan']}
          />
        </Group>
      </Canvas>
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
});

export default App;
