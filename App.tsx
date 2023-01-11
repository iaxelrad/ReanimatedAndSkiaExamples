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
import {StyleSheet, View} from 'react-native';
import {RoundedItem} from './components/RoundedItem';
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  PADDING,
  SQUARES_AMOUNT_VERTICAL,
  SQUARE_AMOUNT_HORIZONTAL,
  SQUARE_CONTAINER_SIZE,
  SQUARE_SIZE,
} from './constants';

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
