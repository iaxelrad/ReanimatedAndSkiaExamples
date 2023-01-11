import {RoundedRect} from '@shopify/react-native-skia';
import React, {FC} from 'react';
import {StyleSheet} from 'react-native';

type RoundedItemProps = {
  x: number;
  y: number;
  width: number;
  height: number;
};

const RoundedItem: FC<RoundedItemProps> = ({...squareProps}) => {
  return <RoundedRect {...squareProps} r={4} />;
};

export {RoundedItem};

const styles = StyleSheet.create({
  container: {},
});
