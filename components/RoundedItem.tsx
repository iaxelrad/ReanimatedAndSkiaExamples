import {
  Extrapolate,
  Group,
  interpolate,
  RoundedRect,
  SkiaMutableValue,
  useComputedValue,
  useValue,
} from '@shopify/react-native-skia';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {CANVAS_HEIGHT, CANVAS_WIDTH, MAX_DISTANCE} from '../constants';

type RoundedItemProps = {
  x: number;
  y: number;
  width: number;
  height: number;
  point: SkiaMutableValue<{
    x: number;
    y: number;
  } | null>;
  progress: SkiaMutableValue<number>;
};

const RoundedItem: FC<RoundedItemProps> = ({
  point,
  progress,
  ...squareProps
}) => {
  const {x, y, width, height} = squareProps;
  const previuosDistance = useValue(0);

  const distance = useComputedValue(() => {
    if (point.current == null) return previuosDistance.current; //TODO
    previuosDistance.current = Math.sqrt(
      (point.current.x - x) ** 2 + (point.current.y - y) ** 2,
    );
    return previuosDistance.current;
  }, [point]);

  const scale = useComputedValue(() => {
    return interpolate(
      distance.current * progress.current,
      [0, MAX_DISTANCE / 2],
      [1, 0],
      {extrapolateLeft: Extrapolate.CLAMP, extrapolateRight: Extrapolate.CLAMP},
    );
  }, [distance, progress]);

  const transform = useComputedValue(() => {
    return [{scale: scale.current}];
  }, [scale]);

  const origin = useComputedValue(() => {
    if (point.current == null)
      return {x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2};
    return point.current;
  }, [point]);

  return (
    <Group origin={origin} transform={transform}>
      <RoundedRect {...squareProps} r={4} />
    </Group>
  );
};

export {RoundedItem};

const styles = StyleSheet.create({
  container: {},
});
