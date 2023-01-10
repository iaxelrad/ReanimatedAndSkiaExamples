import React, {FC} from 'react';
import {
  BlurMask,
  Canvas,
  RoundedRect,
  SweepGradient,
  vec,
} from '@shopify/react-native-skia';

type BackgroundGradientProps = {
  width: number;
  height: number;
};

const BackgroundGradient: FC<BackgroundGradientProps> = ({width, height}) => {
  const canvasPadding = 40;

  return (
    <Canvas
      style={{width: width + canvasPadding, height: height + canvasPadding}}>
      <RoundedRect
        x={canvasPadding / 2}
        y={canvasPadding / 2}
        width={width}
        height={height}
        color={'white'}
        r={20}>
        <SweepGradient
          c={vec((width + canvasPadding) / 2, (height + canvasPadding) / 2)}
          colors={['cyan', 'magenta', 'yellow', 'cyan']}
        />
        <BlurMask blur={10} style={'solid'} />
      </RoundedRect>
    </Canvas>
  );
};

export default BackgroundGradient;
