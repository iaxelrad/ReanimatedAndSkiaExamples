import {
  interpolate,
  RoundedRect,
  SkiaMutableValue,
  useComputedValue,
  useValue,
} from '@shopify/react-native-skia';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';
import {MAX_DISTANCE} from '../constants';

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
      [0, MAX_DISTANCE],
      [1, 0],
    );
  }, [distance, progress]);

  const scaledWidth = useComputedValue(() => {
    return scale.current * width;
  }, [scale]);

  const scaledHeight = useComputedValue(() => {
    return scale.current * height;
  }, [scale]);

  return (
    <RoundedRect
      {...squareProps}
      r={4}
      width={scaledWidth}
      height={scaledHeight}
    />
  );
};

export {RoundedItem};

const styles = StyleSheet.create({
  container: {},
});
