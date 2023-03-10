import {Dimensions} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

export const SQUARE_AMOUNT_HORIZONTAL = 10;
export const SQUARE_CONTAINER_SIZE = SCREEN_WIDTH / SQUARE_AMOUNT_HORIZONTAL;
export const PADDING = 20;
export const SQUARE_SIZE = SQUARE_CONTAINER_SIZE - PADDING;

export const SQUARES_AMOUNT_VERTICAL =
  Math.floor(SCREEN_HEIGHT / SQUARE_CONTAINER_SIZE) - 3;

export const CANVAS_WIDTH = SCREEN_WIDTH;
export const CANVAS_HEIGHT = SQUARES_AMOUNT_VERTICAL * SQUARE_CONTAINER_SIZE;
export const MAX_DISTANCE = Math.sqrt(CANVAS_WIDTH ** 2 + CANVAS_HEIGHT ** 2);
export const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    background: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E',
  },
};

export const SWITCH_TRACK_COLOR = {
  true: 'rgba(256, 0, 256, 0.2)',
  false: 'rgba(0,0,0, 0.1)',
};
