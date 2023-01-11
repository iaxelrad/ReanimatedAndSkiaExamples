import {
  FontWidth,
  interpolate,
  RoundedRect,
  SkiaMutableValue,
  useComputedValue,
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
};

const RoundedItem: FC<RoundedItemProps> = ({point, ...squareProps}) => {
  const {x, y, width, height} = squareProps;

  const distance = useComputedValue(() => {
    if (point.current == null) return 0; //TODO
    return Math.sqrt((point.current.x - x) ** 2 + (point.current.y - y) ** 2);
  }, [point]);

  const scale = useComputedValue(() => {
    return interpolate(distance.current, [0, MAX_DISTANCE], [1, 0]);
  }, [distance]);

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
