import {RoundedRect, SkiaMutableValue} from '@shopify/react-native-skia';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

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
  return <RoundedRect {...squareProps} r={4} />;
};

export {RoundedItem};

const styles = StyleSheet.create({
  container: {},
});
